import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      quote: "기존에 이용하던 대형 업체는 피드백이 너무 느려 답답했는데, 박형진 속기사님은 1:1로 전담해주시니 소통이 빠르고 결과물도 훨씬 정확했습니다. 특히 의학 용어가 많았던 사건인데 완벽하게 처리해주셔서 놀랐습니다.",
      author: "김OO 변호사",
      company: "법무법인 태평양",
      type: "의료 소송 전문"
    },
    {
      quote: "내일 당장 재판에 제출해야 하는 녹취록이었는데, 24시간 긴급 속기 서비스 덕분에 무사히 기한을 맞출 수 있었습니다. 급한 일정에도 불구하고 오탈자 하나 없이 꼼꼼하게 작업해주셔서 감사합니다.",
      author: "이OO 실장",
      company: "A 법률사무소",
      type: "가사 사건 담당"
    },
    {
      quote: "저희 로펌은 기밀 유지가 생명인데, 박형진 속기사님은 철저한 보안 서약과 함께 작업 완료 후 즉시 파기해주셔서 안심하고 맡길 수 있습니다. 대면 상담으로 신뢰를 쌓은 후 계속 거래하고 있습니다.",
      author: "박OO 파트너 변호사",
      company: "법무법인 광장",
      type: "기업 자문"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">고객의 신뢰가 증명합니다</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            수많은 변호사 및 법무법인 실무 담당자들이 박형진 속기사를 선택하는 이유입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-background p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              <p className="text-gray-700 mb-8 relative z-10 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company} | {testimonial.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
