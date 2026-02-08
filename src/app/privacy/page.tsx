import type { Metadata } from "next";
import { Section, SectionTitle } from "@/components/common";
import { companyInfo } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "㈜지혜의밭 개인정보처리방침 - 개인정보보호법에 따른 개인정보의 수집, 이용, 보관, 파기 등에 관한 사항을 안내합니다.",
  openGraph: {
    title: "개인정보처리방침 | 지혜의밭",
    description:
      "㈜지혜의밭 개인정보처리방침 안내",
  },
};

export default function PrivacyPage() {
  return (
    <Section background="white" className="py-16 md:py-24">
      <SectionTitle
        title="개인정보처리방침"
        subtitle={`${companyInfo.name}은(는) 개인정보보호법에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립하여 공개합니다.`}
      />

      <div className="max-w-4xl mx-auto">
        <article className="space-y-12 text-gray-700 leading-relaxed">
          {/* 1. Overview */}
          <PolicySection number={1} title="개인정보처리방침 개요">
            <p>
              {companyInfo.name}(이하 &quot;회사&quot;)은(는) 정보주체의
              자유와 권리 보호를 위해 「개인정보보호법」 및 관계 법령이
              정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게
              관리하고 있습니다. 이에 「개인정보보호법」 제30조에 따라
              정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고,
              이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
              위하여 다음과 같이 개인정보처리방침을 수립 및 공개합니다.
            </p>
          </PolicySection>

          {/* 2. Collected Items */}
          <PolicySection number={2} title="수집하는 개인정보 항목">
            <p>
              회사는 서비스 제공을 위해 필요한 최소한의 개인정보를
              수집하고 있습니다.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
              필수 수집 항목
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>이름</li>
              <li>이메일 주소</li>
              <li>전화번호</li>
              <li>소속(회사/단체명)</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
              자동 수집 항목
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>접속 IP 주소, 접속 일시, 서비스 이용 기록</li>
              <li>브라우저 종류 및 운영체제 정보</li>
            </ul>
          </PolicySection>

          {/* 3. Purpose */}
          <PolicySection number={3} title="개인정보의 수집 및 이용 목적">
            <p>회사는 수집한 개인정보를 다음의 목적을 위하여 처리합니다.</p>
            <ul className="list-disc list-inside space-y-1 mt-3 ml-2">
              <li>
                <strong>서비스 제공:</strong> 프로그램 상담, 교육 신청 접수,
                문의 응대 등 서비스 제공에 관한 계약 이행
              </li>
              <li>
                <strong>고객 관리:</strong> 회원제 서비스 이용에 따른 본인
                확인, 개인 식별, 불만 처리 등 민원 처리
              </li>
              <li>
                <strong>마케팅 및 광고:</strong> 신규 프로그램 안내,
                이벤트 정보 제공 (별도 동의 시)
              </li>
              <li>
                <strong>서비스 개선:</strong> 접속 빈도 분석, 서비스 이용에
                대한 통계 및 분석을 통한 서비스 개선
              </li>
            </ul>
          </PolicySection>

          {/* 4. Retention Period */}
          <PolicySection number={4} title="개인정보의 보유 및 이용기간">
            <p>
              회사는 법령에 따른 개인정보 보유 및 이용기간 또는
              정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유 및
              이용기간 내에서 개인정보를 처리 및 보유합니다.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                보유 기간
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong>서비스 이용 관련 정보:</strong> 수집일로부터{" "}
                  <strong>3년</strong> 또는 이용 목적 달성 시까지
                </li>
                <li>
                  <strong>관계 법령에 의한 보존:</strong> 해당 법령에서
                  정한 기간
                </li>
              </ul>
              <div className="mt-3 text-sm text-gray-600">
                <p className="font-medium mb-1">관계 법령에 따른 보존 기간:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래
                    등에서의 소비자 보호에 관한 법률)
                  </li>
                  <li>
                    대금결제 및 재화 등의 공급에 관한 기록: 5년
                    (전자상거래 등에서의 소비자 보호에 관한 법률)
                  </li>
                  <li>
                    소비자의 불만 또는 분쟁처리에 관한 기록: 3년
                    (전자상거래 등에서의 소비자 보호에 관한 법률)
                  </li>
                  <li>
                    웹사이트 방문 기록: 3개월 (통신비밀보호법)
                  </li>
                </ul>
              </div>
            </div>
          </PolicySection>

          {/* 5. Destruction */}
          <PolicySection number={5} title="개인정보의 파기절차 및 방법">
            <p>
              회사는 개인정보 보유기간의 경과, 처리목적 달성 등
              개인정보가 불필요하게 되었을 때에는 지체 없이 해당
              개인정보를 파기합니다.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
              파기 절차
            </h3>
            <p>
              이용자가 입력한 정보는 목적 달성 후 별도의 DB에
              옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련
              법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
              파기 방법
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong>전자적 파일:</strong> 기록을 재생할 수 없는
                기술적 방법을 사용하여 삭제
              </li>
              <li>
                <strong>종이 문서:</strong> 분쇄기로 분쇄하거나 소각하여
                파기
              </li>
            </ul>
          </PolicySection>

          {/* 6. Third Party */}
          <PolicySection number={6} title="개인정보의 제3자 제공">
            <p>
              회사는 정보주체의 개인정보를 제1조(개인정보의 수집 및 이용
              목적)에서 명시한 범위 내에서만 처리하며,{" "}
              <strong>
                원칙적으로 정보주체의 개인정보를 제3자에게 제공하지
                않습니다.
              </strong>
            </p>
            <p className="mt-3">
              다만, 다음의 경우에는 예외로 합니다.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>정보주체가 사전에 제3자 제공에 동의한 경우</li>
              <li>
                법률에 특별한 규정이 있거나, 법령상 의무를 준수하기
                위하여 불가피한 경우
              </li>
              <li>
                정보주체 또는 그 법정대리인이 의사표시를 할 수 없는
                상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는
                경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체,
                재산의 이익을 위하여 필요하다고 인정되는 경우
              </li>
            </ul>
          </PolicySection>

          {/* 7. Security Measures */}
          <PolicySection number={7} title="개인정보의 안전성 확보 조치">
            <p>
              회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를
              취하고 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>
                <strong>관리적 조치:</strong> 내부관리계획 수립 및 시행,
                개인정보 취급 직원의 최소화 및 교육
              </li>
              <li>
                <strong>기술적 조치:</strong> 개인정보처리시스템 등의
                접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의
                암호화, 보안프로그램 설치
              </li>
              <li>
                <strong>물리적 조치:</strong> 전산실, 자료보관실 등에
                대한 접근 통제
              </li>
            </ul>
          </PolicySection>

          {/* 8. Privacy Officer */}
          <PolicySection number={8} title="개인정보 보호책임자">
            <p>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
              개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제
              등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고
              있습니다.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                개인정보 보호책임자
              </h3>
              <div className="space-y-2">
                <InfoRow label="성명" value={companyInfo.ceo} />
                <InfoRow label="직위" value="대표이사" />
                <InfoRow label="연락처" value={companyInfo.phone} />
                <InfoRow label="이메일" value={companyInfo.email} />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든
              개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한
              사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 회사는
              정보주체의 문의에 대해 지체 없이 답변 및 처리해
              드리겠습니다.
            </p>
          </PolicySection>

          {/* 9. Rights */}
          <PolicySection number={9} title="정보주체의 권리, 의무 및 행사방법">
            <p>
              정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보
              보호 관련 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-decimal list-inside space-y-2 mt-3 ml-2">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
              행사 방법
            </h3>
            <p>
              위의 권리 행사는 회사에 대해 서면, 전화, 이메일 등을
              통하여 하실 수 있으며, 회사는 이에 대해 지체 없이
              조치하겠습니다.
            </p>
            <p className="mt-3">
              정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를
              요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지
              당해 개인정보를 이용하거나 제공하지 않습니다.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
              권익침해 구제방법
            </h3>
            <p>
              정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제,
              상담 등을 문의하실 수 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3 ml-2 text-sm text-gray-600">
              <li>
                개인정보 침해신고센터 (한국인터넷진흥원 운영): (국번없이)
                118 / privacy.kisa.or.kr
              </li>
              <li>
                개인정보 분쟁조정위원회: (국번없이) 1833-6972 /
                www.kopico.go.kr
              </li>
              <li>
                대검찰청 사이버수사과: (국번없이) 1301 / www.spo.go.kr
              </li>
              <li>
                경찰청 사이버수사국: (국번없이) 182 /
                ecrm.cyber.go.kr
              </li>
            </ul>
          </PolicySection>

          {/* 10. Changes */}
          <PolicySection number={10} title="개인정보 처리방침 변경">
            <p>
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및
              방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
              변경사항의 시행 7일 전부터 공지사항을 통하여 고지할
              것입니다.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="font-semibold text-gray-900">
                본 방침은 2025년 1월 1일부터 시행합니다.
              </p>
            </div>
          </PolicySection>
        </article>
      </div>
    </Section>
  );
}

function PolicySection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        {`제${number}조 ${title}`}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex">
      <span className="font-medium text-gray-900 w-20 shrink-0">
        {label}
      </span>
      <span className="text-gray-700">{value}</span>
    </div>
  );
}
