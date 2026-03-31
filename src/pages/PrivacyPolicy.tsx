import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-12 pb-24 bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-primary mb-8 border-b pb-4">개인정보처리방침</h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8">시행일: 2026년 3월 30일</p>

            <p>
              박형진 개인 속기사 사무소(이하 '사무소')는 고객님의 개인정보를 매우 중요하게 생각하며, 
              「개인정보 보호법」 등 관련 법령을 준수하고 있습니다. 
              본 개인정보처리방침을 통해 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 
              개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. 수집하는 개인정보 항목</h3>
            <p>사무소는 상담, 견적, 서비스 제공 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>필수항목: 이름, 연락처, 이메일, 의뢰 내용</li>
              <li>선택항목: 소속(회사명/법무법인명), 직급</li>
              <li>수집방법: 웹사이트 내 문의 폼, 전화, 이메일 상담</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. 개인정보의 수집 및 이용 목적</h3>
            <p>수집한 개인정보는 다음의 목적을 위해 활용됩니다.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>서비스 제공에 관한 계약 이행 및 요금 정산</li>
              <li>고객 상담, 견적 안내, 불만 처리 등 민원 처리</li>
              <li>작업 결과물 전달 및 사후 관리</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. 개인정보의 보유 및 이용 기간</h3>
            <p>
              원칙적으로, 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
              단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
              <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. 개인정보의 파기절차 및 방법</h3>
            <p>
              사무소는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 
              특히, 속기 작업을 위해 제공받은 음성 파일 및 관련 문서는 작업 완료 및 납품 후 7일 이내에 영구 삭제(파기)합니다.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. 기밀 유지 서약</h3>
            <p>
              사무소는 법률 속기의 특수성을 인지하고 있으며, 의뢰받은 모든 사건의 내용과 고객 정보에 대해 
              철저한 기밀 유지를 서약합니다. 어떠한 경우에도 제3자에게 정보를 제공하거나 누설하지 않습니다.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. 개인정보 보호책임자</h3>
            <p>고객님의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호책임자를 지정하고 있습니다.</p>
            <ul className="list-none space-y-2 bg-gray-50 p-4 rounded-lg mt-4">
              <li>책임자: 박형진</li>
              <li>전화번호: 02-123-4567</li>
              <li>이메일: privacy@parksteno.com</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
