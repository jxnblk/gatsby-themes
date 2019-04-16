import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Speakers from '../components/speakers'
import Sponsors from '../components/sponsors'
import Venue from '../components/venue'
import MCs from '../components/mcs'
import Schedule from '../components/schedule'
import CTA from '../components/cta'

export default ({
  data,
}) => {
  const speakers = data.allSpeakersYaml.edges.map(edge => edge.node)
  const schedule = data.allScheduleYaml.edges.map(edge => edge.node)
  const sponsors = data.allSponsorsYaml.edges.map(edge => edge.node)
  const mcs = data.allMcYaml.edges.map(edge => edge.node)
  const { venue } = data.dataYaml

  return (
    <Layout>
      <Banner />
      <Speakers speakers={speakers} />
      <Venue {...venue} />
      <Schedule schedule={schedule} />
      <MCs mcs={mcs} />
      <Sponsors sponsors={sponsors} />
      <CTA />
    </Layout>
  )
}
