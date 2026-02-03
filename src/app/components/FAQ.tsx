import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 px-4 flex items-start justify-between text-left hover:bg-gray-50 transition-colors rounded-lg"
      >
        <div className="flex items-start gap-4 flex-1">
          <HelpCircle className="w-6 h-6 text-[#FF6B9D] flex-shrink-0 mt-1" />
          <span className="text-lg font-medium text-[#5A4A3A] pr-4">{question}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-[#FF6B9D] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-[#FF6B9D] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-6 pl-14 animate-in slide-in-from-top duration-200">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">{answer}</div>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Montessori education?',
      answer: `Montessori education is a student-centered approach to learning that emphasizes hands-on activities, independence, and respect for children's natural interests. It was developed by Italian physician and educator Maria Montessori in the early 1900s.

Some of the features of Montessori education are listed below:

• Self-paced: Children work at their own pace, following their curiosity.
• Multi-age classrooms: Children of different ages work together.
• Hands-on learning: Children learn through real-world experiences.
• Collaborative play: Children work together and independently.
• Creative choices: Children choose their own activities.
• Supportive teachers: Teachers guide children through learning and answer questions.`,
    },
    {
      question: 'What is the history of Montessori Today?',
      answer: `From its humble beginnings more than 100 years ago as a single schoolroom for a group of underprivileged children in Rome, Italy, Montessori education has taken a firm foothold on the education landscape.

In the U.S. alone, approximately 5,000 Montessori schools now serve over one million children, from infancy through adolescence.

Montessori education has been gaining popularity in Ghana over the past decade! As more parents, educators, and schools in Ghana recognize the benefits of Montessori education, it can potentially help address the challenges within the traditional education system, such as overcrowded classrooms and a rigid curriculum for all students.

There are approximately 20,000 Montessori schools worldwide, according to the National Center for Montessori in the Public Sector.`,
    },
    {
      question: 'What is the classroom like?',
      answer: `Montessori classrooms are designed to encourage independence and hands-on learning. The materials are specifically chosen to be engaging and educational, allowing children to explore and learn at their own pace.

Mixed-age classrooms are another key feature because they provide opportunities for peer learning, where older children can model skills for younger ones, and younger children can observe and be inspired by their older peers.

This creates a community atmosphere where children learn cooperation, respect, and empathy while developing their own abilities. It's all about fostering a love of learning and nurturing each child's unique potential.`,
    },
    {
      question: 'What does the Montessori curriculum focus on?',
      answer: `The Montessori curriculum is a child-centered approach to learning that focuses on five key areas of study:

• Practical Life
• Sensorial
• Mathematics
• Language
• Culture

Each area is designed to support the holistic development of the child through hands-on, self-directed learning experiences.`,
    },
    {
      question: 'What are the benefits of Montessori education?',
      answer: `Montessori education places a strong emphasis on developing the whole child, including their emotional and social growth.

By encouraging children to make choices and manage their own learning, they develop self-discipline as they learn to focus and complete tasks independently.

Through activities that require cooperation, like group work or helping others, children naturally build a sense of respect for others and develop empathy and teamwork skills.

Children have the freedom to explore topics and work at their own pace. This not only builds self-confidence but also fosters a lifelong love for learning, as children feel a sense of accomplishment.`,
    },
    {
      question: 'What age group do Montessori schools serve?',
      answer: `Montessori schools typically serve children from infancy through adolescence, offering different programs that cater to various developmental stages. The age ranges are often divided as follows:

• Toddler Programs: 6 months - 3 years
• Preschool Programs: 3 - 6 years
• Elementary Programs: 6 - 12 years

At Bloomings Plus Montessori, we primarily focus on children aged 6 months to 6 years.`,
    },
    {
      question: 'How are children assessed?',
      answer: `In a Montessori environment, children are assessed through observation of their work and interactions. This method focuses on the child as a whole, including their social and emotional development.

The facilitators:
• Identify areas where children need further development
• Ensure children master skills and content before moving on to new lessons
• Support children in becoming independent learners

This individualized approach ensures that each child progresses at their own pace and receives the support they need to thrive.`,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F1E8] to-[#FFF8E7]" id="faq">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[#FF6B9D] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-[#5A4A3A] max-w-3xl mx-auto">
            Find answers to common questions about Montessori education and Bloomings Plus Montessori
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-[#5A4A3A] mb-6">
            Still have questions? We'd love to hear from you!
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#FF6B9D] hover:bg-[#FF4C85] text-white px-8 py-4 rounded-full transition-colors duration-300 text-lg font-medium shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
