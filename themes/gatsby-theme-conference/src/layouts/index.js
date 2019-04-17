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
  speakers,
  schedule,
  sponsors,
  mcs,
  venue
}) =>
  <Layout>
    <Banner />
    <Speakers speakers={speakers} />
    <Venue {...venue} />
    <Schedule schedule={schedule} />
    <MCs mcs={mcs} />
    <Sponsors sponsors={sponsors} />
    <CTA />
  </Layout>
