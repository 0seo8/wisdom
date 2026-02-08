-- ============================================
-- 지혜의밭 (Artswisdom) 데이터베이스 스키마
-- ============================================

-- Enum 타입 생성
CREATE TYPE program_category AS ENUM ('healasoma', 'somatic-lab', 'daily-art', 'business');
CREATE TYPE certification_category AS ENUM ('trademark', 'copyright', 'certification', 'award');

-- ============================================
-- 1. 공지사항 테이블
-- ============================================
CREATE TABLE notices (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    is_published BOOLEAN DEFAULT true,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_notices_published ON notices(is_published, created_at DESC);

-- RLS 정책
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "공지사항 공개 읽기" ON notices
    FOR SELECT USING (is_published = true);

CREATE POLICY "관리자 전체 접근" ON notices
    FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- 2. 문의하기 테이블
-- ============================================
CREATE TABLE inquiries (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    attachment_url TEXT,
    is_read BOOLEAN DEFAULT false,
    is_replied BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_inquiries_unread ON inquiries(is_read, created_at DESC);

-- RLS 정책
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "문의 작성 허용" ON inquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY "관리자만 조회" ON inquiries
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "관리자만 수정" ON inquiries
    FOR UPDATE USING (auth.role() = 'authenticated');

-- ============================================
-- 3. 연구원 테이블
-- ============================================
CREATE TABLE researchers (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    specialty TEXT NOT NULL,
    qualifications TEXT[] DEFAULT '{}',
    bio TEXT,
    image_url TEXT,
    "order" INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_researchers_active ON researchers(is_active, "order");

-- RLS 정책
ALTER TABLE researchers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "연구원 공개 읽기" ON researchers
    FOR SELECT USING (is_active = true);

CREATE POLICY "관리자 전체 접근" ON researchers
    FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- 4. 프로그램 테이블
-- ============================================
CREATE TABLE programs (
    id BIGSERIAL PRIMARY KEY,
    category program_category NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT NOT NULL,
    features TEXT[] DEFAULT '{}',
    image_url TEXT,
    "order" INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_programs_category ON programs(category, is_active, "order");
CREATE UNIQUE INDEX idx_programs_slug ON programs(slug);

-- RLS 정책
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "프로그램 공개 읽기" ON programs
    FOR SELECT USING (is_active = true);

CREATE POLICY "관리자 전체 접근" ON programs
    FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- 5. 인증/수상 테이블
-- ============================================
CREATE TABLE certifications (
    id BIGSERIAL PRIMARY KEY,
    category certification_category NOT NULL,
    title TEXT NOT NULL,
    issuer TEXT,
    issue_date DATE,
    image_url TEXT,
    "order" INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_certifications_category ON certifications(category, is_active, "order");

-- RLS 정책
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "인증 공개 읽기" ON certifications
    FOR SELECT USING (is_active = true);

CREATE POLICY "관리자 전체 접근" ON certifications
    FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- 6. 연혁 (타임라인) 테이블
-- ============================================
CREATE TABLE timeline (
    id BIGSERIAL PRIMARY KEY,
    year INTEGER NOT NULL,
    month INTEGER CHECK (month >= 1 AND month <= 12),
    title TEXT NOT NULL,
    description TEXT,
    "order" INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_timeline_year ON timeline(year DESC, "order");

-- RLS 정책
ALTER TABLE timeline ENABLE ROW LEVEL SECURITY;

CREATE POLICY "연혁 공개 읽기" ON timeline
    FOR SELECT USING (is_active = true);

CREATE POLICY "관리자 전체 접근" ON timeline
    FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- updated_at 자동 업데이트 함수
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 트리거 적용
CREATE TRIGGER update_notices_updated_at
    BEFORE UPDATE ON notices
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_researchers_updated_at
    BEFORE UPDATE ON researchers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_programs_updated_at
    BEFORE UPDATE ON programs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 초기 데이터 (연구원)
-- ============================================
INSERT INTO researchers (name, specialty, qualifications, "order") VALUES
('문수정', '한나 소매틱스', ARRAY['소마전문사', '문화예술교육사'], 1),
('최미라', '라반 댄스 테라피', ARRAY['국제공인라반동작분석가'], 2),
('이영선', '소마 힐링 요가', ARRAY['물리치료사', '요가 지도사'], 3),
('정이화', '소마 발레', ARRAY['이화여대 무용과 출강'], 4),
('최은화', '무브 무브 바디 바디', ARRAY['움직임창작소 대표'], 5);

-- ============================================
-- 초기 데이터 (프로그램 - 힐소마)
-- ============================================
INSERT INTO programs (category, slug, title, subtitle, description, features, "order") VALUES
('healasoma', 'bodyfulness', '바디풀니스', '소매틱스', '홀리즘 관점의 건강관으로 몸과 마음의 통합적 접근법. 스트레스 해소, 만성통증 개선, 자세 교정을 위한 프로그램입니다.', ARRAY['스트레스 해소', '만성통증 개선', '자세 교정'], 1),
('healasoma', 'mindfulness', '마인드풀니스', '명상', '사마타(집중명상)와 위빠사나(통찰명상)를 통한 마음 수련. 자애명상, 호흡명상, 소리명상, 걷기명상 등을 포함합니다.', ARRAY['자애명상', '호흡명상', '소리명상', '걷기명상'], 2),
('healasoma', 'therapy', '테라피', '치유', '문제 해결을 스스로 할 수 있도록 돕는 치유 프로그램. 아로마테라피, 춤테라피, 사운드 테라피, 컬러테라피를 포함합니다.', ARRAY['아로마테라피', '춤테라피', '사운드 테라피', '컬러테라피'], 3),
('healasoma', 'expressive', '표현 예술', NULL, '음악치료, 미술치료, 무용동작치료, 연극치료를 통해 무의식의 방어기제를 승화하도록 지원합니다.', ARRAY['음악치료', '미술치료', '무용동작치료', '연극치료'], 4),
('healasoma', 'group', '집단 상담', NULL, '관계를 통한 치유로 정서적 상처를 해소합니다. 안전한 공간에서의 감정 표출을 강조합니다.', ARRAY['관계 치유', '정서적 상처 해소', '안전한 공간'], 5),
('healasoma', 'creative', '연극놀이', '크리에이티브 드라마', '직원교육 및 집단 교육에 활용하는 창의적 드라마 프로그램. 팀 결속력 향상 및 창의적 아이디어 도출에 효과적입니다.', ARRAY['팀 결속력', '창의적 아이디어', '직원교육'], 6);

-- ============================================
-- 초기 데이터 (프로그램 - 일상의 예술)
-- ============================================
INSERT INTO programs (category, slug, title, subtitle, description, features, "order") VALUES
('daily-art', 'muniman', '무늬만', '소통극장', '개인과 조직의 갈등 해결을 위한 참여형 공연. 관객이 배우와 함께 문제 상황을 연습해보는 열린 무대입니다.', ARRAY['참여형 공연', '갈등 해결', '열린 무대'], 1),
('daily-art', 'nukduri', '넋두리', '공감극장', '참가자의 이야기를 배우와 뮤지션이 즉흥적으로 표현하는 프로그램. 안전하게 해결하고 성장할 수 있는 장을 제공합니다.', ARRAY['즉흥공연', '공감 창출', '성장의 장'], 2),
('daily-art', 'navichoom', '내비춤', '춤 명상', '몸의 자유로운 움직임을 통한 치유 프로그램. 스트레스 해소와 신체 활성화에 초점을 맞춥니다.', ARRAY['춤 명상', '스트레스 해소', '신체 활성화'], 3);

-- ============================================
-- 초기 데이터 (연혁)
-- ============================================
INSERT INTO timeline (year, month, title, description, "order") VALUES
(2017, NULL, '㈜지혜의밭 설립', '웰니스 문화 선도를 위한 사회적기업 설립', 1),
(2018, NULL, '사회적기업 인증', '고용노동부 사회적기업 인증 획득', 2),
(2019, NULL, '소셜벤처 인증', '중소벤처기업부 소셜벤처 인증', 3),
(2020, NULL, '힐소마 프로그램 런칭', '통합 웰니스 프로그램 힐소마 시작', 4),
(2021, NULL, '소매틱랩 설립', '전문 연구 부서 소매틱랩 출범', 5),
(2022, NULL, '일상의 예술 시작', '무늬만, 넋두리, 내비춤 프로그램 런칭', 6),
(2023, NULL, '기업교육 확대', 'ESG 기반 기업교육 및 행사기획 서비스 확장', 7),
(2024, NULL, '여성기업 인증', '여성기업확인서 획득', 8),
(2025, NULL, '웹사이트 리뉴얼', 'Next.js 기반 새로운 웹사이트 구축', 9);

-- ============================================
-- 초기 데이터 (인증)
-- ============================================
INSERT INTO certifications (category, title, issuer, "order") VALUES
('trademark', '넋두리', '특허청', 1),
('trademark', '무늬만', '특허청', 2),
('trademark', '내비춤', '특허청', 3),
('trademark', '소통극장', '특허청', 4),
('trademark', '공감극장', '특허청', 5),
('trademark', '지혜의밭', '특허청', 6),
('certification', '사회적기업', '고용노동부', 7),
('certification', '소셜벤처', '중소벤처기업부', 8),
('certification', '여성기업', '여성기업확인기관', 9),
('certification', '예비사회적기업', '서울시', 10),
('certification', '벤처기업', '중소벤처기업부', 11),
('certification', '이노비즈', '중소벤처기업부', 12);
