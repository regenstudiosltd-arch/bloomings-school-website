import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function WhoWeAre() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFE5EC] to-[#FFF0F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#FF6B9D] text-5xl md:text-6xl mb-12 text-center">
            ABOUT US
          </h2>
          
          <div className="bg-white/80 rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Brief Content */}
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                <span className="text-[#FF6B9D] font-semibold">Bloomings Montessori Plus</span> has been a nurturing nest for children from the age group of <span className="font-semibold">6 months to 6 years</span> since 2019. We offer a unique, enriching educational environment, combining the authentic Montessori approach with bilingual learning (English and French). We are an <span className="font-semibold">initiate school member of the South African Montessori Association</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our team of passionate educators is dedicated to fostering creativity and independence in every child. We aim to provide holistic education that nurtures students, helping them become <span className="font-semibold">lifelong learners and responsible global citizens</span>.
              </p>
            </div>

            {/* Extended Content */}
            {isExpanded && (
              <div className="mt-6 space-y-6 text-gray-700 animate-in slide-in-from-top duration-300">
                <div className="mt-8">
                  <h3 className="text-2xl text-[#FF6B9D] mb-4">The BM+ Montessori Approach</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Montessori education is a student-centered approach to learning that emphasizes hands-on activities, independence, and respect for children's natural interests. It was developed by Italian physician and educator Maria Montessori in the early 1900s.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#FFF0F5] p-4 rounded-xl">
                      <h4 className="font-semibold text-[#FF6B9D] mb-2">Self-paced Learning</h4>
                      <p>Children work at their own pace, following their curiosity.</p>
                    </div>
                    <div className="bg-[#FFE5EC] p-4 rounded-xl">
                      <h4 className="font-semibold text-[#FF6B9D] mb-2">Multi-age Classrooms</h4>
                      <p>Children of different ages work together.</p>
                    </div>
                    <div className="bg-[#FFE5EC] p-4 rounded-xl">
                      <h4 className="font-semibold text-[#FF6B9D] mb-2">Hands-on Learning</h4>
                      <p>Children learn through real-world experiences.</p>
                    </div>
                    <div className="bg-[#FFF0F5] p-4 rounded-xl">
                      <h4 className="font-semibold text-[#FF6B9D] mb-2">Collaborative Play</h4>
                      <p>Children work together and independently.</p>
                    </div>
                    <div className="bg-[#FFF0F5] p-4 rounded-xl">
                      <h4 className="font-semibold text-[#FF6B9D] mb-2">Creative Choices</h4>
                      <p>Children choose their own activities.</p>
                    </div>
                    <div className="bg-[#FFE5EC] p-4 rounded-xl">
                      <h4 className="font-semibold text-[#FF6B9D] mb-2">Supportive Teachers</h4>
                      <p>Teachers guide children through learning and answer questions.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl text-[#FF6B9D] mb-4">Age Groups We Serve</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF6B9D] text-xl">•</span>
                      <p><span className="font-semibold">Toddler Programs:</span> 6 months - 3 years</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF6B9D] text-xl">•</span>
                      <p><span className="font-semibold">Preschool Programs:</span> 3 - 6 years</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF6B9D] text-xl">•</span>
                      <p><span className="font-semibold">Elementary Programs:</span> 6 - 12 years</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl text-[#FF6B9D] mb-4">How We Assess Children</h3>
                  <p className="text-lg leading-relaxed">
                    In a Montessori environment, children are assessed through observation of their work and interactions. This method focuses on the child, including their social and emotional development. The facilitators identify areas where children need further development, they ensure children master skills and content before moving on to new lessons and support children in becoming independent learners.
                  </p>
                </div>
              </div>
            )}

            {/* Read More Button */}
            <div className="mt-8 text-center">
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-[#FF6B9D] hover:bg-[#FF5A8F] text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="ml-2 w-5 h-5" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}