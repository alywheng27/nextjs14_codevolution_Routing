import Card from '@/app/components/card'
import React from 'react'
import Link from 'next/link'

/**
 * ! Unmatched Routes
 * * Navigation from the UI
 * ? In the case of navigation wihtin the UI, Nextjs retains the previously active state of a slot regardless of changes in the URL.
 * * Page Reload
 * ? Nextjs immediately searches for a default.tsx file within each unmatched slot.
 *                      ////////////////////////////////
 * ? The presence of a default.tsx file is critical, as it provides the default contents that nextjs will render in the user interface.
 *                      ////////////////////////////////
 * ? If this default.tsx file is missing in any of the unmatched slots for the current route, nextjs will render a 404 error.
 * 
 * * Default.tsx
 * ? the default.tsx file in nextjs serves a fallback to render content when the
 * ? framework cannot retrieve a slot's active state from the current URL.
 *                      ////////////////////////////////
 * ? You have a complete freedom to define the UI for unmatched routes:
 * ? you can either mirror the content found in page.tsx or craft an entire custom views.
 */

const ArchivedNotification = () => {
  return (
    <Card>
        Archived Notifications
        <Link href="/complex-dashboard">Default</Link>
    </Card>
  )
}

export default ArchivedNotification