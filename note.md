### Summary Note

## Creating Next App
- npx create-next-app@latest

## Routing
- The name of the folder is the URL with page.tsx in it.

## _foldername - Private folder

- A folder with an _ at the beginning is a private folder.
- Private folder cannot be access in a browser.

## (foldername) - Route Group

- A folder inside a () is called a Route Group.
- A Route Group folder just organize the folders in it and it bypasses in the URL.

## Layout

- Layout.tsx can be created inside the Route folder along with page.tsx for specific layouting and the layout.tsx in a root folder is still in
  effect. That means to layout.tsx is in effect.
- When a state is put in layout.tsx, the state is preserve even if the link changes.
  If the state is put in page.tsx, the state reset if the link changes.
  The state will reset if it reloads.

## Template

- Template.tsx is almost the as layout.tsx except that template.tsx reset the state or
  doesn't preserve the state if the link changes.
  The state will reset if it reloads.

## Title in meta
  # Static Metadata  
- Title can have 3 children.
- Absolute overides the template if there is any.
- Default is the default title if the page doesn't have any.
- Template used when adding suffix or prefix in the title.
- metadata can also be put in page.tsx for specific title or description.

  export const metadata = {
    title: "About me",
  }

  import { Metadata } from 'next'
  export const metadata: Metadata = {
    title: {
     absolute: "Blog"
    }
  }

## Children
- define as a parameter in a function.
({ children, }: { children: React.ReactNode })
- Children in layout.tsx is the page.tsx from where it will be called.

## Link
- Use <Link href=""></Link> from 'next/link' instead of <a></a>.

## Image
- Use <Image /> from 'next/image' instead of <img />.
<Image
    src="/vercel.svg"
    alt="Vercel Logo"
    className="dark:invert"
    width={100}
    height={24}
    priority
/>

## Custom Not Found Page
- Use not-found.tsx for custom not found page.
- Layout.tsx is still in effect in a not-found.tsx.

## Custom Loading
- Use loading.tsx for custom loading page.

## @foldername - Parallel Route
- Parallel routes in nextjs are defined using a feature known as slots.
- Slots help structure our content in a modular fashion.
- To define a slot, we use the @folder naming convention.
- Each slot is then passed as a prop to its corresponding layout.tsx file.

  function name({
    children,
    users,
    revenue,
    notifications,
    login
  }: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
  })

  function name(props: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
  })

  # props is the parent of children


## Benefits of Parallel Routing
# Independent Route Handling
- Each slot of your layout, can have its own loading or error states.
- Beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors.
  Only the the error section will be affected and not the entire page.
# Sub-navigation in routes
- each slot can essentially function as a mini-application, complete with its own navigation and state management.
- Useful where different sections serve distinct purposes.
- Each slot can operate standalone entity without affecting the state or display of other sections.

## Conditional Routing
- Putting a condition inside a 'return' is allowed.

  return isLogin  (<div></div>): (login)

## Unmatched Routes
# Navigation from the UI
- In the case of navigation wihtin the UI, Nextjs retains the previously active state of a slot regardless of changes in the URL.
# Page Reload
- Nextjs immediately searches for a default.tsx file within each unmatched slot.
- The presence of a default.tsx file is critical, as it provides the default contents that nextjs will render in the user interface.
- If this default.tsx file is missing in any of the unmatched slots for the current route, nextjs will render a 404 error
  not just in a slot but in a whole page.

# Default.tsx
- the default.tsx file in nextjs serves a fallback to render content when the
  framework cannot retrieve a slot's active state from the current URL.

- You have a complete freedom to define the UI for unmatched routes:
  You can either mirror the content found in page.tsx or craft an entire custom views.

## [foldername] - Dynamic Route
- A folder inside a [] is called a Dynamic Route.
- eg.. /products/1
- To access 1 in the URL above:

  type Props = {
    params: {
      productId: string
    }
  }

  const ProductID = ({ params, }: Props) => {
    return (
      <div>ProductID: { params.productId }</div>
    )
  }

## Dynamic Metadata
- eg.. You can have dynamic title each time the URL change.
- To use Dynamic Metadata:

# Without Async
# The name 'generateMetadata' function is required
  export const generateMetadata = ({ params }: Props): Metadata => {
    return {
      title: `Product ${ params.productId }`
    }
  }

# With Async
# The name 'generateMetadata' function is required
  export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
      setTimeout(() => {
        resolve(`iPhone ${ params.productId }`)
      }, 100)
    })
    return {
      title: `Product ${title}`
    }
  }

## error.tsx
- error.tsx is used for custom error page.
- 'reset' tries to recover from the error.
- The deeper the error.tsx is in a folder, the more specific area the error will cover.
- On the other hand, the 1st level error will cover most of the page.
- The error.tsx will not affect the layout.tsx within the same or deeper level of the folder.
- To solve this, you have to put the error.tsx 1 level folder outside of the layout.tsx

  const error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
      <div>
        {error.name + `: ` + error.message}{" "}
        <button onClick={reset} className="px-4 py-2 bg-slate-500">Try again</button>
      </div>
    );
  };

## [...foldername] - Catch-all-Segments
- Captures all URL segments and maps them to its folder's page.tsx.

## [[...foldername]] - Catch-all-Routes
- Captures all routes (means including parent folder) and maps them to its folder's page.tsx.

## Intercepting Routes
- Intercepting routes allows you to intercept or stop the default routing behaviour to 
  present an alternative view or component when navigating through the UI,
  while still preserving the intended route for scenarios like page reload.

- This can be useful if you want to show a route while keeping the context of the current page.

## Intercepting Routes Conventions
- (.)foldername - interceptor folder must be the same level as the default folder.
- (..)foldername - interceptor folder must be one level deeper than the default folder.
- (..)(..)foldername - interceptor folder must be two level deeper than the default folder
  (..)(..) not working as of October 2023
- (...)foldername - the root app folder will be the default folder of the interceptor folder

- Interceptor folder can be inside the default folder.
- Can also use (..)foldername/foldername.
- default folder name and interceptor folder name must be the same.

## Navigating Programatically
  import { useRouter } from 'next/navigation'
  const router = useRouter()

  router.push("/feature") - redirect to another page.
  router.replace("/feature") - replace the url (basically it resets the url history then when you hit back, you go to the main page.)
  router.back() - go back to previous page.
  router.forward() - go forward to another page.

## Parallel Intercepting Route
- Dynamic route will be activated if you directly route onto it.
- The [dynamic route] folder inside [intercepting route] folder inside a [parallel route] will be activated if the Link is clicked.
  It can be an image modal or a login.
- If reloads, the dynamic route loads.