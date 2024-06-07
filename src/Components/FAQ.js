import React from 'react';
import Accordian from './Accordian';

const FAQ = () => {
  return (
    <>
    <div className='' id='faq'>
        <h2 className='mt-20 text-center text-4xl font-semibold'>Common Questions from Our Clients.</h2>
    </div>
    <div className='mt-20 px-80 rounded-lg'>
        <Accordian title='What services does your agency provide?' answer='We specialize in building modern web applications using React. Our services include custom React development, React Native mobile app development, UI/UX design, performance optimization, and maintenance of existing React applications.' />

        <Accordian title='Why should I choose React for my project?' answer='React is a popular JavaScript library for building user interfaces, known for its performance, flexibility, and scalability. It enables the creation of dynamic, responsive web applications with a seamless user experience. Additionally, React component-based architecture promotes reusability and maintainability.' />

        <Accordian title='How experienced is your team with React?' answer='Our team consists of seasoned React developers with years of experience in building high-quality web and mobile applications. We have successfully delivered numerous projects across various industries, ensuring best practices and up-to-date knowledge in the React ecosystem.' />

        <Accordian title=' What is the typical timeline for a React project?' answer='The timeline for a React project depends on its complexity and scope. A small to medium-sized project typically takes between 4 to 12 weeks, while larger, more complex projects may take several months. We provide a detailed project plan and timeline during the initial consultation.' />

        <Accordian title='How much does it cost to build a React application?' answer='The cost of building a React application varies based on the projects complexity, features, and timeline. We provide customized quotes after understanding your specific requirements. Contact us for a free consultation and detailed estimate.' />
    </div>
    </>
  )
}

export default FAQ;