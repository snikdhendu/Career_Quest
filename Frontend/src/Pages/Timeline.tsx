// import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBook, FaGraduationCap, FaPencilAlt, FaSchool, FaUserGraduate, FaBriefcase, FaBuilding, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TimelineNavbar } from '../Components';
// import WorkIcon

const Timeline = () => {
  return (
    <>
    <TimelineNavbar/>
    <div className="relative min-h-fit p-9 bg-[url('https://i.pinimg.com/564x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')]">
    {/* Overlay */}
    <div className="absolute inset-0 bg-gray-300 opacity-50 z-0"></div>
    <div className="relative z-10">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Step 1: Foundation (10th Grade)</h3>
          <p>Choose Science Stream (Physics, Chemistry, Math) after completing 10th grade.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaBook />}
        >
          <h3 className="vertical-timeline-element-title">Step 2: 11th - 12th Grade</h3>
          <p>Study Physics, Chemistry, and Mathematics, core subjects for engineering.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaPencilAlt />}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        >
          <h3 className="vertical-timeline-element-title">Step 3: Entrance Exam Preparation</h3>
          <p>Prepare for exams like JEE Main, JEE Advanced, and state-level exams like MHT-CET or WBJEE.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Step 4: JEE Main Exam</h3>
          <p>JEE Main is held in multiple sessions. It is the first step to top institutes like NITs, IIITs.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Step 5: JEE Advanced Exam</h3>
          <p>After clearing JEE Main, appear for JEE Advanced to secure admission to IITs.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaBuilding />}
        >
          <h3 className="vertical-timeline-element-title">Step 6: State-Level Entrance Exams</h3>
          <p>Appear for other exams like MHT-CET, WBJEE, KCET, BITSAT, or VITEEE.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">Step 7: College Admission</h3>
          <p>Participate in counseling for seat allocation in colleges based on your exam rank.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaChalkboardTeacher />}
        >
          <h3 className="vertical-timeline-element-title">Step 8: Bachelor of Technology (B.Tech)</h3>
          <p>Enroll in a B.Tech program in engineering streams like:{' '}
            <span className='text-blue-600 underline flex flex-col gap-1'>
            <Link to='/courses/cse'>Computer Science and Engineering (CSE)</Link>
            <Link to='/courses/mechanical'>Mechanical Engineering</Link>
            <Link to='/courses/electrical'>Electrical Engineering</Link>
            <Link to='/courses/civil'>Civil Engineering</Link>
            <Link to='/courses/electronics'>Electronics and Communication Engineering</Link>
            <Link to='/courses/chemical'>Chemical Engineering</Link>
            <Link to='/courses/biotech'>Biotechnology</Link>
            <Link to='/courses/aeronautical'>Aeronautical Engineering</Link>
            </span>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Step 9: Internship & Placement</h3>
          <p>Gain practical experience through internships and appear for job placements.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Step 10: Post Graduation (Optional)</h3>
          <p>Pursue higher studies like M.Tech, MS, or MBA after B.Tech for better opportunities.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </div>
    </>

  );
}

export default Timeline;
