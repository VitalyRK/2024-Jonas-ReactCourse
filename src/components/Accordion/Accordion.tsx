import styles from './index.module.css';
import Item from './Item';

const Accordion = () => {
  const content = [
    {
      title: 'MobX',
      text: `
  Outside Redux and React’s built-in Context API, MobX is probably the most popular state manager out there. MobX takes a markedly different approach to state management than Redux. 
  It follows the OOP paradigm and uses the observer/observables pattern to manage state. MobX creates an observable data model that your observers or components can refer to. It then tracks the data accessed by each component and renders it whenever the data changes.
  Another feature of MobX is immutability. It allows you to update the state silently to avoid side effects.
  As it doesn't require actions or reducers, any modifications in state are instantly reflected in components. This makes MobX truly reactive. But this also means shorter and less explicit code. This might be a con for some developers as it takes away some visibility and control from them.
  Usability, performance, and scalability are no problems for MobX. But it also excels in modifiability and reusability. And being a mature library (almost 26k stars on GitHub), MobX has no lack of community support or a fledgling ecosystem.`,
    },
    {
      title: 'Zustand',
      text: `
Built by the people behind Jotai and weighing in at under 1KB, Zustand might be the smallest library on this list. But it’s certainly nothing to be scoffed at. Zustand brings a simple and minimalistic API that makes it fast and scalable.
Zustand’s API is based on hooks and React components can then use to retrieve and share state. It easily overcomes common issues in React like the zombie child problem, React concurrency, and context loss between mixed renderers. It claims to be the only state manager that has managed to do so.
Also, it renders components only if their state changes. It provides clean and easily maintainable code that’s much shorter and more readable than many other libraries on this list.
Zustand can also manage transient state updates without re-rendering the components. It has managed to gain more than 23k stars on Github, which is more than Rematch, Jotai, and MobX.`,
    },
    {
      title: 'Redux',
      text: `
Redux has been around since 2015. The very first React state management library, React was created to simplify state management by centralizing the state repository. It does this by using a ‘Store’ to hold all the states of your application. 
Redux still maintains a comfortable lead over all other state management libraries, according to the Jan 2022 npmtrends results. Redux works using actions and reducers. Actions are objects instructing the store on what events should take place. And reducers are functions that are executed based on the action’s input and an object’s initial state.
Whenever you need to modify the state of a component based on user behavior, you can dispatch an action to the reducer which changes the state and saves it in the store.
Though Redux is widely popular, developers aren’t too keen on the related boilerplate they need to work with. Multiple actions and reducers lead to a lot of code that gets hard to maintain when apps become complex. But the Redux Toolkit can be used to reduce the boilerplate and simplify the overall issue.
With the Redux Toolkit taking care of the usability of Redux, its simple logic and pure functions make it quite maintainable, performant, and testable. You can also modify and reuse Redux code as it is framework-agnostic and supports middleware.
And due to its maturity, it enjoys a large community of developer support and a rich ecosystem of add-ons and tools.
      `,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        {content.map(({ title, text }, id) => (
          <Item key={title} id={id + 1} title={title} text={text} />
        ))}
      </div>
    </>
  );
};

export default Accordion;
