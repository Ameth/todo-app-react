import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = (props) => (
  <>
    <li className='relative h-20 min-h-full w-96 min-w-fit'>
      <div
        className={`block h-full rounded-lg border border-gray-700 p-4 hover:border-teal-300`}
      >
        <ContentLoader
          speed={2}
          className='w-full h-full top-0'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          {...props}
        >
          <rect x='48' y='29' rx='3' ry='3' width='232' height='9' />
          <circle cx='27' cy='23' r='11' />
          <rect x='48' y='46' rx='3' ry='3' width='232' height='9' />
          <rect x='48' y='14' rx='3' ry='3' width='104' height='9' />
          <rect x='288' y='6' rx='0' ry='0' width='23' height='24' />
          <rect x='318' y='6' rx='0' ry='0' width='23' height='24' />
        </ContentLoader>
      </div>
    </li>
    <li className='relative h-20 min-h-full w-96 min-w-fit'>
      <div
        className={`block h-full rounded-lg border border-gray-700 p-4 hover:border-teal-300`}
      >
        <ContentLoader
          speed={2}
          className='w-full h-full top-0'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          {...props}
        >
          <rect x='48' y='29' rx='3' ry='3' width='232' height='9' />
          <circle cx='27' cy='23' r='11' />
          <rect x='48' y='46' rx='3' ry='3' width='232' height='9' />
          <rect x='48' y='14' rx='3' ry='3' width='104' height='9' />
          <rect x='288' y='6' rx='0' ry='0' width='23' height='24' />
          <rect x='318' y='6' rx='0' ry='0' width='23' height='24' />
        </ContentLoader>
      </div>
    </li>
    <li className='relative h-20 min-h-full w-96 min-w-fit'>
      <div
        className={`block h-full rounded-lg border border-gray-700 p-4 hover:border-teal-300`}
      >
        <ContentLoader
          speed={2}
          className='w-full h-full top-0'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          {...props}
        >
          <rect x='48' y='29' rx='3' ry='3' width='232' height='9' />
          <circle cx='27' cy='23' r='11' />
          <rect x='48' y='46' rx='3' ry='3' width='232' height='9' />
          <rect x='48' y='14' rx='3' ry='3' width='104' height='9' />
          <rect x='288' y='6' rx='0' ry='0' width='23' height='24' />
          <rect x='318' y='6' rx='0' ry='0' width='23' height='24' />
        </ContentLoader>
      </div>
    </li>
  </>
)

export default Loader
