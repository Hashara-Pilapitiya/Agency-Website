import React from 'react';


const Blog = () => {

  const blogs = [

    {id: 1,
    title: 'Creating streamlined processes with OneRen',
    image: '/src/Assets/blogimg01.avif'},

    {id: 2,
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    image: '/src/Assets/blogimg02.avif'},

    {id: 3,
    title: 'Revamping the membership model with Triatholn Australia',
    image: '/src/Assets/blogimg03.avif'}

  ]

  return (
    
        <div className='px-4 mx-auto my-12 max-w-screen-2xl lg:px-14' id='testimonial'>
            <div className='mx-auto text-center md:w-1/2'>
                <h2 className='mb-4 text-4xl font-semibold tracking-wide'>The unseen of spending three years ath Pixelgrade</h2>
                <p className='mx-auto mb-8 text-sm md:w-3/4 text-silver tracking-wider'>
                    Unleash your creativity with our product designed to empower your artistic endeavors. From intuitive features to unmatched performance, this tool is a game-changer for creative professionals seeking to push the boundaries of their craft.
                </p>
            </div>

            {/* all blogs */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                  blogs.map( blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src={blog.image} alt='' className='hover:scale-95 transition-all cursor-pointer'/>
                    
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto'>
                      <h3 className='mb-3 text-blue-500 font-semibold tracking-wide'>{blog.title}</h3>

                      <div className='flex justify-center gap-8'>
                            <a href='/' className='font-bold text-silver hover:text-black hover:tracking-wide'>Read More{" "}
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="17"
                                height="11"
                                viewBox='0 0 17 11'
                                fill='none'
                                className='inline-block ml-2'
                            >
                                <path 
                                    d="M12 9.39905L15.2929 6.106115C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" 
                                    stroke="#4682b4" 
                                    strokeWidth="2"
                                />
                                </svg>
                            </a>
                        </div>
                  </div>
                  </div>)
                }


            </div>
        

   </div>
  

            

        
  
  )
}

export default Blog;