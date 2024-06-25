import list from '../../public/list.json';
import Card from './Card';

function Course() {
    return (
        <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl'>We&apos;re delighted to have you <span className='text-pink-500'>Here :) </span></h1>
            <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio culpa sit ratione aliquid error. Maiores neque a at hic sint beatae quis libero et dolore, esse error itaque eveniet exercitationem?</p>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map((item) =>(
                    <Card key={item.id} item= {item}/>
                ))
            }
        </div>
        </div>            
        </>
    )
}

export default Course
