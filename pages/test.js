import dynamic from 'next/dynamic'
const Donut = dynamic(() => import('../components/donut.js'), {
  ssr: false,
})

const Test = () => (
  <Donut></Donut>
)

export default Test
