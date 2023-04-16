### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

	React Router handles client and server side routing. It allows you to navigate a webpage with refreshing the page.

- What is a single page application?
-
	A web app that only loads a single web document. It uses Javascript APIs to refresh and upload new content.

- What are some differences between client side and server side routing?

	Server side routing involves fetching new webpages when you click on a link. With client side routing the web app processes and presents the app for you.

	
- What are two ways of handling redirects with React Router? When would you use each?

	1. Using the history API. This is only to be used when accessing pages rendered by React Router.
	2. Using a redirect component. This is to be used when ever there is a change to a local state of a component.

- What are two different ways to handle page-not-found user experiences using React Router?

	1. Using a catch all "page not found" component when clicking on an route.
	2. Redirecting them back to the home (/) page. 

- How do you grab URL parameters from within a component using React Router?

	Use the URLSearchParams() constructor then pass in the string comnponent within the actual component.

- What is context in React? When would you use it?

	It allows you to store information in a centralized location for components to retrieve. It could be utilized any time you need to step out the natural downstream of infromation (props) present in a React app hierarchy.
	
- Describe some differences between class-based components and function
  components in React.

	Functional components accept prop arguments and doesn't require a render method to return JSX. Class based components control state, require a render method as well as a constructor.
	

- What are some of the problems that hooks were designed to solve?

	Hooks solved overbearing nesting and wrappers, oversized components, and classes that confuse developers and break applications.