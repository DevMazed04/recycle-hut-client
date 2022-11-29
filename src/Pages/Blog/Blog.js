import React from "react";

const Blog = () => {
  return (
    <div>
      <h3 className="text-3xl text-center my-10 font-semibold text-gray-600 w-[85%] mx-auto">
        React Interview Questions
      </h3>

      <div
        className="accordion w-[85%] lg:w-[95%] mx-auto"
        id="accordionExample"
      >
        <div className="accordion-item bg-white mb-5 rounded-xl border-0 border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
                    accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                    font-semibold
                  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Q-1: What are the different ways to manage a state in a React
              application?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <b className="text-cyan-500">i) Local (UI) state manage:</b> Local
              state is most often managed in React using the useState hook. For
              example, local state would be needed to show or hide a modal
              component or to track values for a form component, such as form
              submission, when the form is disabled and the values of a forms
              inputs. <br />
              <b className="text-cyan-500">
                ii) Global (UI) state manage:
              </b>{" "}
              Global state is data we manage across multiple components. Global
              state is necessary when we want to get and update data anywhere in
              our app, or in multiple components at least. A common example of
              global state is authenticated user state. If a user is logged into
              our app, it is necessary to get and change their data throughout
              our application. Sometimes state we think should be local might
              become global. <br />
              <b className="text-cyan-500">iii) Server state manage:</b> Data
              that comes from an external server that must be integrated with
              our UI state. Server state is a simple concept, but can be hard to
              manage alongside all of our local and global UI state. There are
              several pieces of state that must be managed every time you fetch
              or update data from an external server, including loading and
              error state. Fortunately there are tools such as SWR and React
              Query that make managing server state much easier. <br />
              <b className="text-cyan-500">iv) URL state manage:</b> Data that
              exists on our URLs, including the pathname and query parameters.
              URL state is often missing as a category of state, but it is an
              important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state. Try to imagine building
              a blog without being able to fetch a post based off of its slug or
              id that is located in the URL! There are undoubtedly more pieces
              of state that we could identify, but these are the major
              categories worth focusing on for most applications you build.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white mb-5 rounded-xl border-0 border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
                    accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                    font-semibold
                  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Q-2: How does prototypical inheritance work?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <b className="text-cyan-500">
                Working procedure of Prototypal Inheritance:{" "}
              </b>{" "}
              Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__. So,
              the core idea of Prototypal Inheritance is that an object can
              point to another object and inherit all its properties. The main
              purpose is to allow multiple instances of an object to share
              common properties, hence, the Singleton Pattern. Prototypal
              inheritance uses the concept of prototype chaining. Every object
              created contains [[Prototype]], which points either to another
              object or null. Envision an object C with a [[Prototype]] property
              that points to object B. Object B's [[Prototype]] property points
              to prototype object A. This continues onward, forming a kind of
              chain called the prototype chain. This concept is used when
              searching our code. When we need to find a property in an object,
              it is first searched for in the object, and if not found, it is
              searched for on that object's prototype, and so on. Thus, the
              entire prototype chain is traversed until the property is found or
              null is reached. In the following sections, we'll take a look at
              some implementations using the handling of accounts in a streaming
              service.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white mb-5 rounded-xl border-0 border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
                    accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                    font-semibold
                  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Q-3: What is a unit test? Why should we write unit tests?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <b className="text-cyan-500">Unit Test: </b> Unit test is a type
              of software testing where individual units or components of a
              software are tested. The purpose is to validate that each unit of
              the software code performs as expected. Unit Testing is done
              during the development (coding phase) of an application by the
              developers. Unit Tests isolate a section of code and verify its
              correctness. A unit may be an individual function, method,
              procedure, module, or object. In SDLC, STLC, V Model, Unit testing
              is first level of testing done before integration testing. Unit
              testing is a WhiteBox testing technique that is usually performed
              by the developer. Though, in a practical world due to time crunch
              or reluctance of developers to tests, QA engineers also do unit
              testing. <br /> <br />
              <b className="text-cyan-500">Reasons to write Unit Tests: </b>
              Unit Testing is important because software developers sometimes
              try saving time doing minimal unit testing and this is myth
              because inappropriate unit testing leads to high cost Defect
              fixing during System Testing, Integration Testing and even Beta
              Testing after application is built. If proper unit testing is done
              in early development, then it saves time and money in the end.
              Here, are the key reasons to perform unit testing in software
              engineering: <br />
              <b>i)</b> Unit tests help to fix bugs early in the development
              cycle and save costs. <br />
              <b>ii)</b> It helps the developers to understand the testing code
              base and enables them to make changes quickly. <br />
              <b>iii)</b> Good unit tests serve as project documentation. <br />
              <b>iv)</b> Unit tests help with code re-use. Migrate both your
              code and your tests to your new project. Tweak the code until the
              tests run again.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white mb-5 rounded-xl border-0 border-gray-200">
          <h2 className="accordion-header mb-0" id="headingFour">
            <button
              className="
                    accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                    font-semibold
                  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Q-4: What is the difference between React vs. Angular vs. Vue?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <b>Key differences between Angular, React and Vue: </b> <br />
              <br />
              <b className="text-cyan-500">i) Architecture: </b> <br />
              <b>Angular.js</b> is a full-fledged MVC framework that provides
              you with all the possibilities for out-of-the-box programming:
              Templates based on HTML; Dependency injection; Ajax requests;
              Routing; Encapsulation of CSS components; Components testing
              utilities; Opportunities to create forms, etc. <br />
              <b>React.js</b> on the other hand, is a library that just offers
              the view, leaving the developer to decide how to construct the
              Model and Controller. The following features are provided: As an
              add-on to JavaScript, the JSX language, which is similar to XML,
              is used instead of templates; No introduction of dependencies;
              Ajax requests; <br />
              <b> Vue.js </b> is a library that allows you to create interactive
              web interfaces. Vue.js is primarily concerned with the ViewModel
              layer of the MVVM architecture. It uses two-way data bindings to
              attach the View and the Model. Directives and Filters abstract
              away the actual DOM operations and output formatting.
              <br /> <br />
              <b className="text-cyan-500">ii) Data Binding: </b> <br />
              <b> Angular.js </b> uses the two-way binding. The state of the
              model is changed first, and then the modification of the interface
              element is reflected. <br />
              <b> React.js </b> has one-way binding. First, the state of the
              model is updated, and then it reflects the change of the interface
              element. <br />
              <b> Vue.js </b> data binding on is two-way. Vue.js synchronizes
              the entire model with the DOM mechanically. This implies that all
              Vue.js templates are fundamentally legal, parsable HTML with a few
              extra features.
              <br />
              <br />
              <b className="text-cyan-500">iii) Syntax: </b> <br />
              <b>Angular</b> is written in TypeScript, which means you need some
              time to learn it to work with this framework. <br />
              <b> React</b> uses JSX and native Javascript developers are
              familiar with it. The training period is easier and does not
              require that much preparation. <br />
              <b>Vue.js</b> makes use of an HTML-based template syntax that
              allows you to link the displayed DOM to the data of the base
              element instance declaratively. <br /> <br />
              <b className="text-cyan-500">iv) Integration: </b> <br />
              <b> Angular </b> provides a basic framework for building web
              applications and does not require any additional libraries. It is
              relatively rigid and inflexible as a complete framework. <br />
              <b> React.js </b> in most instances, using extra libraries is
              advised. As a result, it's more adaptable and simple to integrate
              into current mobile apps. <br />
              <b> Vue.js </b> allows distinct features of an app to be
              implemented without altering the architecture. Vue.js may be used
              to create both single-page apps and more complex online interfaces
              for apps.
              <br /> <br />
              <b className="text-cyan-500">v) Performance: </b> <br />
              <b>Angular.js</b> creates a watcher for each binding to capture
              all changes to the DOM. Every time the view updates, the new
              values compare with the old ones. <br /> <b>React.js</b>
              since uses a virtual DOM, when the view is modified, the new DOM
              compares it to the virtual DOM and changes accordingly. <br />
              <b>Vue.js</b> has better performance thanks to the virtual DOM,
              which is useful for complicated programs. It may be as little as
              20KB while maintaining its speed and versatility.
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
