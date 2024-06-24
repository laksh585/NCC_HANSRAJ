import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaFlag } from 'react-icons/fa';

const NCCTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1948"
        iconStyle={{ background: '#6A6D9E', color: '#fff' }}
        icon={<FaFlag />}
      >
        <h3 className="vertical-timeline-element-title">NCC Founded</h3>
        <p>The National Cadet Corps was established with a focus on instilling discipline and leadership in youth.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1965"
        iconStyle={{ background: '#02044F', color: '#fff' }}
        icon={<FaFlag />}
      >
        <h3 className="vertical-timeline-element-title">First NCC Republic Day Camp</h3>
        <p>Cadets from across the country participated in the first Republic Day Camp.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1988"
        iconStyle={{ background: '#554DDE', color: '#fff' }}
        icon={<FaFlag />}
      >
        <h3 className="vertical-timeline-element-title">Women in NCC</h3>
        <p>The NCC opened its doors to female cadets, promoting gender equality.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2005"
        iconStyle={{ background: '#007bff', color: '#fff' }}
        icon={<FaFlag />}
      >
        <h3 className="vertical-timeline-element-title">NCC Celebrates Golden Jubilee</h3>
        <p>Celebrating 50 years of excellence in grooming the youth of the nation.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021"
        iconStyle={{ background: '#EF1C25', color: '#fff' }}
        icon={<FaFlag />}
      >
        <h3 className="vertical-timeline-element-title">Digital Transformation</h3>
        <p>Introducing digital tools and platforms to enhance training and communication.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023"
        iconStyle={{ background: '#333', color: '#fff' }}
        icon={<FaFlag />}
      >
        <h3 className="vertical-timeline-element-title">Azaadi ka Amrit Mahotsav</h3>
        <p>Introducing the importance of Amrit kaal cadets also Once a cadet always a cadet</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    
    
  );
};

export default NCCTimeline;
