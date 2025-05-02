import { industries } from '@/data/industries'
import React from 'react'
import OnboardingForm from './_components/onboarding-form'
import { getUserOnboardingStatus } from '@/actions/user'

const OnboardingPage = async() => {}
  //check if user is alredy onboarded
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    // Redirect to the dashboard or another page
    redirect('/dashboard')
  }
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  )
}

export default OnboardingPage