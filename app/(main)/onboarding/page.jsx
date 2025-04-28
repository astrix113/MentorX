import { industries } from '@/data/industries'
import React from 'react'
import OnboardingForm from './_components/onboarding-form'

const OnboardingPage = () => {
  //check if user is alredy onboarded
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  )
}

export default OnboardingPage