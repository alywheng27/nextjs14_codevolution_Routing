import Card from '@/app/components/card'
import React from 'react'
import Link from 'next/link'

const Notification = () => {
  return (
    <Card>
        Notifications
        <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  )
}

export default Notification