const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");

const TIMELINE_ROWS = [
  { year: 2017, month: 11, title: "공감극장 공연 '넋두리' 타임스퀘어 소극장", description: null, order: 1 },
  { year: 2017, month: 10, title: "예술경영지원센터 기업 협력 사업 “On and On Family”", description: null, order: 2 },
  { year: 2017, month: 7, title: "소통극장 '무늬만 가족' 상명대 아트 홀", description: null, order: 3 },
  { year: 2017, month: 2, title: "한국사회적기업진흥원 Social entrepreneur 선정", description: null, order: 4 },
  { year: 2017, month: 1, title: "“신중년을 위한 울어도 돼!” 통합교육 프로그램", description: null, order: 5 },
  { year: 2018, month: 12, title: "성동구 돌봄봉사자들을 위한 내비춤 “몸 춤, 꽃으로 피어나다”", description: null, order: 6 },
  { year: 2018, month: 9, title: "예술경영지원센터 기업 협력 사업 “예술에 여행을 더 가족愛 재발견“", description: null, order: 7 },
  { year: 2018, month: 6, title: "한울 배터리<법무부 제1호 사회적 협동조합> MOU", description: null, order: 8 },
  { year: 2018, month: 4, title: "부처형 예비사회적기업 지정 제2018-040호", description: null, order: 9 },
  { year: 2018, month: 3, title: "서울 동부구치소 통합예술교육(남자,여자 수용자)", description: null, order: 10 },
  { year: 2018, month: 2, title: "서울 동부구치소 통합예술교육(남자 수용자)", description: null, order: 11 },
  { year: 2019, month: 10, title: "결혼이주여성교육 프로젝트 진행(협업) / ㈜토글 MOU", description: null, order: 12 },
  { year: 2019, month: 6, title: "군포시 학교 밖 청소년을 위한 프로그램 진행(‘몸과 마음의 안전기지‘)", description: null, order: 13 },
  { year: 2019, month: 5, title: "한국사회적기업진흥원 MOVE 콜라보사업 선정", description: null, order: 14 },
  { year: 2019, month: 4, title: "서울동부구치소 집중인성교육 프로그램", description: null, order: 15 },
  { year: 2019, month: 3, title: "성동구 사회적경제 종사자 맞춤교육(공감훈련)", description: null, order: 16 },
  { year: 2020, month: 12, title: "학교폭력 예방연극 “네 이름이 뭐니?” 온라인 공연", description: null, order: 17 },
  { year: 2020, month: 11, title: "코로나블루극복을 위한 소통·공감 “공감 UP” 온/오프라인 공연", description: null, order: 18 },
  { year: 2020, month: 11, title: "ART on the Move Seoul 공연 “provoke seoul : 영등포의 숨결”", description: null, order: 19 },
  { year: 2020, month: 10, title: "ART on the Move Seoul 공연 “탁트인 영등포:목련으로 말하다”", description: null, order: 20 },
  { year: 2020, month: 9, title: "ART On The Move Seoul 공연 “추석맞이 대금과 가야금의 듀엣”", description: null, order: 21 },
  { year: 2020, month: 8, title: "‘Art On the Move Seoul’ 프로젝트 퍼포먼스 기획 총괄(8월~12월)", description: null, order: 22 },
  { year: 2020, month: 8, title: "영등포 문화재단 사업 “돌봄종사자들을 위한 몸, 춤, 쉼”", description: null, order: 23 },
  { year: 2021, month: 12, title: "서울시 중장년 은퇴자 몸마음 건강을 위한 ‘지혜로운 은퇴생활’", description: null, order: 24 },
  { year: 2021, month: 11, title: "서남권글로벌센터 내외국인 ‘코로나블루타파 프로젝트,내비춤’", description: null, order: 25 },
  { year: 2021, month: 7, title: "온라인 비아페스티벌 참가 ‘몸, 춤, 꽃으로 피어나다’", description: null, order: 26 },
  { year: 2021, month: 4, title: "이대 공연 ‘물끄러미 하염없이’ 몸으로 하는 아름다운 사색과 성찰", description: null, order: 27 },
  { year: 2021, month: 3, title: "사회적기업 인증 제2021-058호 (창의·혁신형)", description: null, order: 28 },
  { year: 2021, month: 2, title: "상표등록증 출원 ‘지혜의밭’, ‘네 이름이 뭐니?’ ‘코로나19극복 공감UP’ 저작권 등록", description: null, order: 29 },
  { year: 2022, month: 12, title: "영등포문화도시 ‘문화복덕방’ ‘다시 쓰는 대림동 이야기’ 사업", description: null, order: 30 },
  { year: 2022, month: 12, title: "IT사회적기업 ‘라임프렌즈㈜’ MOU", description: null, order: 31 },
  { year: 2022, month: 12, title: "가슴 뭉클한 공연 “나반 – 나에게 반하다.”(과천 시민회관)", description: null, order: 32 },
  { year: 2022, month: 11, title: "사회서비스영등포네트워크 ‘몸..,쉼’ 프로그램", description: null, order: 33 },
  { year: 2022, month: 8, title: "한국장학재단 상담센터 ‘힐링캠프’", description: null, order: 34 },
  { year: 2022, month: 6, title: "[사회현안]데이터바우처지원사업 데이터가공(A.I)수요기업 선정", description: null, order: 35 },
  { year: 2023, month: 11, title: "동작구시설관리공단 서비스접점직원 ‘힐링프로그램’", description: null, order: 36 },
  { year: 2023, month: 9, title: "중소벤처기업부 ‘소셜벤처기업’ 인증", description: null, order: 37 },
  { year: 2023, month: 8, title: "과학기술정보통신부 ‘소매틱연구개발전담부서 인정서’ 취득", description: null, order: 38 },
  { year: 2023, month: 6, title: "국악 방송 라디오 ‘은영선의 함께 걷는 길’ 출연", description: null, order: 39 },
  { year: 2023, month: 5, title: "서원대학교 산업대학원 소셜벤처전공 석사과정 특강", description: null, order: 40 },
  { year: 2023, month: 5, title: "‘시립문래청소년센터’ MOU 체결", description: null, order: 41 },
  { year: 2023, month: 4, title: "(재)한국지역사회교육재단 KCEF SCHOLARSHIP 장학기관 선정", description: null, order: 42 },
  { year: 2024, month: 12, title: "영등포문화도시 ‘생활권 문화공유 공동 프로젝트’ 진행", description: null, order: 43 },
  { year: 2024, month: 12, title: "영등포문화도시 ‘문화복덕방’ ‘다시 쓰는 대림동 이야기’ 사업", description: null, order: 44 },
  { year: 2024, month: 10, title: "영등포문화도시 ‘로컬 메니저 페스타’ 참여", description: null, order: 45 },
  { year: 2024, month: 7, title: "춘천 문화도시 박람회 시민협의체 워크숍 추진", description: null, order: 46 },
  { year: 2024, month: 2, title: "(주)라임프렌즈 직장인의 몸, 마음을 위한 ‘찾아가는 소매틱스’ 진행", description: null, order: 47 },
  { year: 2025, month: 12, title: "영등포문화재단 ‘넋두리 대림 이야기로 잇는 우리’ 공연", description: null, order: 48 },
  { year: 2025, month: 12, title: "대한민국 국회 국회의원(김민석) 표창장 수상 (지역 사회 발전 공로)", description: null, order: 49 },
  { year: 2025, month: 11, title: "‘중국동포연합중앙회’ MOU 체결", description: null, order: 50 },
  { year: 2025, month: 11, title: "한국사회적기업진흥원 S.V.I (사회적가치지표) 측정 참여 우수등급인증", description: null, order: 51 },
  { year: 2025, month: 11, title: "사랑의 열매 ‘중국동포한부모가정 정서지원 및 선,이주민 관계회복’", description: null, order: 52 },
  { year: 2025, month: 3, title: "서울시복지재단 ‘사회적 연결 처방 :외로움 없는 서울’ 진행", description: null, order: 53 },
];

const CERTIFICATION_ROWS = [
  { category: "trademark", title: "넋두리 제 40-1665119 호", issuer: "특허청", issue_date: null, order: 1 },
  { category: "trademark", title: "무늬만 제 40-1665118 호", issuer: "특허청", issue_date: null, order: 2 },
  { category: "trademark", title: "내비춤 제 40-1677526 호", issuer: "특허청", issue_date: null, order: 3 },
  { category: "trademark", title: "소통극장 제 40-1677528 호", issuer: "특허청", issue_date: null, order: 4 },
  { category: "trademark", title: "공감극장 제 40-1677524 호", issuer: "특허청", issue_date: null, order: 5 },
  { category: "trademark", title: "지혜의밭 제 40-1705149 호", issuer: "특허청", issue_date: null, order: 6 },
  { category: "copyright", title: "넋두리 제 C-2018-011080 호", issuer: "한국저작권위원회", issue_date: null, order: 7 },
  { category: "copyright", title: "무늬만 가족 제 C-2017-024230 호", issuer: "한국저작권위원회", issue_date: null, order: 8 },
  { category: "copyright", title: "네 이름이 뭐니? 제 C-2021-005812 호", issuer: "한국저작권위원회", issue_date: null, order: 9 },
  { category: "copyright", title: "코로나19극복 공감UP 제 C-2021-009720호", issuer: "한국저작권위원회", issue_date: null, order: 10 },
  { category: "certification", title: "사회가치측정(SVI) 우수등급인증 (한국사회적기업진흥원)", issuer: "한국사회적기업진흥원", issue_date: null, order: 11 },
  { category: "certification", title: "사회적기업 제 2021-058 호(고용노동부)", issuer: "고용노동부", issue_date: null, order: 12 },
  { category: "certification", title: "여성기업 제 0111-2022-20045 호(서울지방중소벤처기업청)", issuer: "서울지방중소벤처기업청", issue_date: null, order: 13 },
  { category: "certification", title: "창업기업 제 202109-90191-0011960 호(중소벤처기업부)", issuer: "중소벤처기업부", issue_date: null, order: 14 },
  { category: "certification", title: "소매틱연구전담부서 제 2023155581 호(과학기술정보통신부)", issuer: "과학기술정보통신부", issue_date: null, order: 15 },
  { category: "certification", title: "소셜벤처기업 제 2023-01-1008호(중소벤처기업부)", issuer: "중소벤처기업부", issue_date: null, order: 16 },
];

function loadEnvFile(filePath) {
  const pairs = fs
    .readFileSync(filePath, "utf8")
    .split(/\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));

  for (const line of pairs) {
    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex);
    const value = line.slice(separatorIndex + 1);
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

async function replaceTable(supabase, table, rows) {
  const { error: deleteError } = await supabase.from(table).delete().neq("id", 0);
  if (deleteError) {
    throw deleteError;
  }

  const { error: insertError } = await supabase.from(table).insert(rows);
  if (insertError) {
    throw insertError;
  }
}

async function main() {
  loadEnvFile(".env.local");

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL 또는 SUPABASE_SERVICE_ROLE_KEY가 없습니다.");
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  await replaceTable(supabase, "timeline", TIMELINE_ROWS);
  await replaceTable(supabase, "certifications", CERTIFICATION_ROWS);

  console.log(
    JSON.stringify(
      {
        timeline: TIMELINE_ROWS.length,
        certifications: CERTIFICATION_ROWS.length,
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
