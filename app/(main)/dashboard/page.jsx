import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react'

const IndustryInsightsPage = async() => {
  const { isOnboarded } = await getUserOnboardingStatus();
    if (!isOnboarded) {
      // Redirect to the dashboard or another page
      redirect('/onboarding')
    }
  return (
    <div>IndustryInsightsPage</div>
  )
}

export default IndustryInsightsPage