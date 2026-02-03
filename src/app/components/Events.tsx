import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'School Resumes - Second Term',
      date: 'January 12, 2026',
      time: '8:00 AM',
      location: 'Main Campus',
      description: 'Welcome back! Start of the Second Term (Jan 12 - Apr 2, 2026).',
      category: 'Academic',
      color: 'from-[#FF6B9D] to-[#FFB6C1]',
    },
    {
      id: 2,
      title: 'New Admissions Week',
      date: 'January 19-23, 2026',
      time: 'All Day',
      location: 'All Classrooms',
      description: 'Special orientation week for new students joining Bloomings Montessori.',
      category: 'Admissions',
      color: 'from-[#A8C69F] to-[#C8E6C9]',
    },
    {
      id: 3,
      title: 'First Aid Training',
      date: 'February 11, 2026',
      time: '9:00 AM - 12:00 PM',
      location: 'Spintex Medical Hospital',
      description: 'Staff first aid training session at Spintex Medical Hospital.',
      category: 'Staff Development',
      color: 'from-[#F4A261] to-[#FFD4A3]',
    },
    {
      id: 4,
      title: 'Valentine\'s Day Celebration',
      date: 'February 13, 2026',
      time: '10:00 AM - 12:00 PM',
      location: 'School Grounds',
      description: 'Celebrate love and friendship with special activities and treats.',
      category: 'Cultural',
      color: 'from-[#FF6B9D] to-[#FFB6C1]',
    },
    {
      id: 5,
      title: 'Mid-Term Break',
      date: 'February 19-20, 2026',
      time: 'All Day',
      location: 'All Campuses',
      description: 'Mid-term break. School resumes on Monday, February 23rd.',
      category: 'Holiday',
      color: 'from-[#9B59B6] to-[#C39BD3]',
    },
    {
      id: 6,
      title: 'Parent-Teacher Conference Week',
      date: 'February 23-27, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Campus',
      description: 'Individual meetings to discuss your child\'s progress and development.',
      category: 'Academic',
      color: 'from-[#3498DB] to-[#85C1E2]',
    },
    {
      id: 7,
      title: 'Independence Day Celebration',
      date: 'March 5, 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'School Grounds',
      description: 'Celebrate Ghana\'s Independence with cultural activities and performances.',
      category: 'Cultural',
      color: 'from-[#A8C69F] to-[#C8E6C9]',
    },
    {
      id: 8,
      title: 'World French Language Day',
      date: 'March 19, 2026',
      time: '9:00 AM - 2:00 PM',
      location: 'All Classrooms',
      description: 'Celebrate French language and culture with special bilingual activities.',
      category: 'Cultural',
      color: 'from-[#F4A261] to-[#FFD4A3]',
    },
    {
      id: 9,
      title: 'Movie Day (Pajama Day)',
      date: 'March 27, 2026',
      time: '10:00 AM - 2:00 PM',
      location: 'Main Hall',
      description: 'Come dressed in your pajamas for a fun movie day!',
      category: 'Fun',
      color: 'from-[#9B59B6] to-[#C39BD3]',
    },
    {
      id: 10,
      title: 'Easter Celebration & Egg Hunt',
      date: 'April 2, 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'School Grounds',
      description: 'Easter egg hunt and decorate the Easter bunny. School vacates for holidays.',
      category: 'Cultural',
      color: 'from-[#FF6B9D] to-[#FFB6C1]',
    },
  ];

  const schoolCalendar = [
    { 
      month: 'January 2026', 
      events: [
        'School Resumes (12th)',
        'New Admissions Week (19-23rd)'
      ] 
    },
    { 
      month: 'February 2026', 
      events: [
        'First Aid Training (11th)',
        'Valentine\'s Day (13th)',
        'Mid-Term Break (19-20th)',
        'Parent-Teacher Conference (23-27th)'
      ] 
    },
    { 
      month: 'March 2026', 
      events: [
        'Independence Day (5th)',
        'Independence Holiday (6th)',
        'World French Language Day (19th)',
        'Eid-Ul-Fitr Holiday (20th)',
        'Movie Day - Pajama Day (27th)'
      ] 
    },
    { 
      month: 'April 2026', 
      events: [
        'Easter Celebration & Egg Hunt (2nd)',
        'School Vacates (2nd)',
        'School Resumes Next Term (22nd)'
      ] 
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8E7] to-[#F5F1E8]" id="events">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[#5A4A3A] mb-4">Events & Calendar</h2>
          <p className="text-xl text-[#8B7355] max-w-3xl mx-auto">
            Stay connected with upcoming school events, celebrations, and important dates
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Events - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl text-[#5A4A3A] mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-[#FF6B9D]" />
              Upcoming Events
            </h3>
            
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`h-2 bg-gradient-to-r ${event.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${event.color} text-white`}>
                            {event.category}
                          </span>
                        </div>
                        <h4 className="text-xl text-[#5A4A3A] mb-2">{event.title}</h4>
                        <p className="text-[#8B7355] mb-4">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-3 text-sm text-[#8B7355]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#FF6B9D]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#FF6B9D]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#FF6B9D]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button className="bg-[#FF6B9D] hover:bg-[#FF4C85] text-white px-8 py-3 rounded-full">
                View Full Calendar
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* School Calendar Sidebar */}
          <div>
            <h3 className="text-3xl text-[#5A4A3A] mb-6">Quick Calendar</h3>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="space-y-6">
                {schoolCalendar.map((month, index) => (
                  <div key={index}>
                    <h4 className="text-lg text-[#FF6B9D] mb-3 pb-2 border-b-2 border-[#FFE5EC]">
                      {month.month}
                    </h4>
                    <ul className="space-y-2">
                      {month.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-start gap-2 text-sm text-[#5A4A3A]">
                          <span className="text-[#A8C69F] mt-1">•</span>
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-gradient-to-br from-[#FFE5EC] to-[#FFF0F5] rounded-2xl shadow-lg p-6">
              <h4 className="text-xl text-[#5A4A3A] mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#FF6B9D]" />
                Term Information
              </h4>
              <div className="space-y-3 text-sm text-[#5A4A3A]">
                <div className="pb-3 border-b border-[#FF6B9D]/20">
                  <p className="font-semibold text-[#FF6B9D] mb-1">Second Term</p>
                  <p>Monday, Jan 12 - Thursday, Apr 2, 2026</p>
                </div>
                <div className="pt-2">
                  <p className="font-semibold mb-2">Key Dates:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Mid-Term Break</span>
                      <span className="text-[#FF6B9D]">Feb 19-20</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Independence Day</span>
                      <span className="text-[#FF6B9D]">Mar 6</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Eid-Ul-Fitr</span>
                      <span className="text-[#FF6B9D]">Mar 20</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Term Ends</span>
                      <span className="text-[#FF6B9D]">Apr 2</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Next Term Starts</span>
                      <span className="text-[#FF6B9D]">Apr 22</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Download Calendar CTA */}
            <div className="mt-6">
              <button className="w-full bg-[#A8C69F] hover:bg-[#8FB887] text-white py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Download Calendar PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}