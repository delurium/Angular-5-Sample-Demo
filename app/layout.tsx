import type { Metadata } from 'next'
import 'src/extras/css/styles.css'
import 'src/extras/css/w3.css'
import 'src/app/components/login/login.component.css'
import 'src/app/components/student/details/student-details.component.css'
import 'src/app/components/student/add/student-add.component.css'
import 'src/app/components/student/list/student-list.component.css'
import 'src/app/components/index/app.component.css'
import 'src/app/components/home/home.component.css'

export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
