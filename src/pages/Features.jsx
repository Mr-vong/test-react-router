import FeaturesList from "../components/FeaturesList"
import FAQ from "../components/FAQ"
import GetStarted from "../components/GetStarted"

export default function Features(){
  return(
    <>
      <FeaturesList
        fullList={true}
      />
      <FAQ />
      <GetStarted />
    </>
  )
}