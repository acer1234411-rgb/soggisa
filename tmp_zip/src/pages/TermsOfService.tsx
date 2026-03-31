import { motion } from 'motion/react';

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold text-primary mb-8 border-b pb-4">이용약관</h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500 mb-8">시행일: 2026년 3월 30일</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">제1조 (목적)</h3>
            <p>
              본 약관은 박형진 개인 속기사 사무소(이하 "사무소")가 제공하는 
              속기 및 관련 서비스(이하 "서비스")의 이용과 관련하여, 
              사무소와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">제2조 (용어의 정의)</h3>
            <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>"서비스"라 함은 사무소가 이용자에게 제공하는 녹취록 작성, 회의록 작성, 현장 속기 등의 업무를 의미합니다.</li>
              <li>"이용자"라 함은 본 약관에 따라 사무소에 서비스를 의뢰하고 제공받는 자를 의미합니다.</li>
              <li>"결과물"이라 함은 사무소가 이용자의 의뢰에 따라 작성하여 납품하는 녹취록, 회의록 등의 문서(전자문서 포함)를 의미합니다.</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">제3조 (서비스의 의뢰 및 계약의 성립)</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>이용자는 사무소가 정한 절차(전화, 이메일, 웹사이트 폼 등)에 따라 서비스의 내용, 기한, 비용 등을 명시하여 의뢰합니다.</li>
              <li>계약은 이용자의 의뢰에 대하여 사무소가 승낙의 의사표시를 하고, 상호 합의된 견적에 따른 비용(선수금 등)이 결제된 시점에 성립합니다.</li>
              <li>사무소는 의뢰 내용이 위법하거나 공서양속에 반하는 경우, 또는 기술적으로 불가능한 경우 승낙을 거절할 수 있습니다.</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">제4조 (서비스의 제공 및 납품)</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>사무소는 계약 성립 시 정해진 기한 내에 결과물을 이용자에게 납품해야 합니다.</li>
              <li>이용자가 제공한 음성 파일의 상태(음질 불량, 다화자 중복 발언 등)에 따라 부득이하게 납품 기한이 연장될 수 있으며, 이 경우 사무소는 사전에 이용자에게 통지하고 동의를 구합니다.</li>
              <li>결과물은 원칙적으로 전자문서(PDF, HWP, Word 등) 형태로 이메일 또는 보안 링크를 통해 전달되며, 요청 시 서면(우편)으로 발송될 수 있습니다.</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">제5조 (수정 및 이의제기)</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>이용자는 결과물을 수령한 후 7일 이내에 내용의 오류나 누락에 대한 수정을 요청할 수 있습니다.</li>
              <li>사무소의 명백한 과실로 인한 오류는 무상으로 수정되며, 이용자의 추가 요청이나 원본 파일 변경에 따른 수정은 추가 비용이 발생할 수 있습니다.</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">제6조 (기밀 유지 의무)</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>사무소는 서비스 제공 과정에서 취득한 이용자의 정보, 사건 내용, 음성 파일 등을 철저히 비밀로 유지하며, 제3자에게 누설하거나 제공하지 않습니다.</li>
              <li>사무소는 작업이 완료되고 결과물이 최종 확정된 후 7일 이내에 관련 원본 파일 및 작업 문서를 영구 파기합니다. 단, 법령에 의한 보존 의무가 있는 경우는 예외로 합니다.</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">제7조 (면책 조항)</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>사무소는 이용자가 제공한 원본 파일의 음질 불량, 잡음 등으로 인해 물리적으로 청취가 불가능한 부분에 대해서는 책임을 지지 않으며, 해당 부분은 '청취불능' 등으로 표기됩니다.</li>
              <li>사무소는 작성된 결과물의 법적 효력이나 재판 결과에 대해서는 어떠한 책임도 지지 않습니다.</li>
              <li>천재지변, 통신 장애 등 불가항력적인 사유로 서비스 제공이 지연되거나 불가능한 경우 사무소는 책임을 면합니다.</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">제8조 (관할법원)</h3>
            <p>본 약관과 관련된 분쟁이 발생할 경우, 양 당사자는 상호 합의에 의해 원만히 해결하도록 노력하며, 합의가 이루어지지 않을 경우 사무소의 소재지를 관할하는 법원을 합의관할로 합니다.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
