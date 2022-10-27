# Welcome to Joe's Army Remix Starter Template!

[Coding After Thirty](https://www.youtube.com/codingafterthirty) 

- [Remix Docs](https://remix.run/docs)
- [Strapi Docs ](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)

## Template set up

1. Install all your dependncies by running `yarn`:

```sh
yarn
```

2. Rename .env.example to .env

3. Start the app:
```sh
yarn dev
```
### Resources

You can find the html code inside the resources folder as well as the starter React Components that you can use.

You will also find the code for both the Remix and Strapi completed apps for you to use as reference.

Enjoy.

Just in case I will add the code snipit here.

## HTML

``` html
<section class="py-20">
        <div class="container px-4 mx-auto">
          <div class="max-w-3xl mx-auto mb-24 text-center">
            <span class="text-xs text-blue-400 font-semibold">What's new at Shuffle</span>
            <h2 class="mt-8 text-4xl font-semibold font-heading">Lorem ipsum dolor sit amet consectutar domor at elis</h2>
          </div>
          <div class="flex flex-wrap -mx-3 -mb-20">
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-20">
              <div class="relative pt-12 px-6 pb-6 border rounded-2xl">
                <span class="absolute top-0 left-0 ml-8 -mt-8 flex justify-center items-center w-16 h-16 rounded-full bg-orange-500">
                  <svg width="18" height="21" viewbox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.98451 19.606C8.98451 19.606 16.6565 17.283 16.6565 10.879C16.6565 4.474 16.9345 3.974 16.3195 3.358C15.7035 2.742 9.99051 0.75 8.98451 0.75C7.97851 0.75 2.26551 2.742 1.65051 3.358C1.03451 3.974 1.31251 4.474 1.31251 10.879C1.31251 17.283 8.98451 19.606 8.98451 19.606Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6.38593 9.87463L8.27793 11.7696L12.1759 7.86963" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <h3 class="mb-6 text-2xl font-semibold font-heading">Suspendisse interdum ullamcorper elit at?</h3>
                <p class="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-20">
              <div class="relative pt-12 px-6 pb-6 border rounded-2xl">
                <span class="absolute top-0 left-0 ml-8 -mt-8 flex justify-center items-center w-16 h-16 rounded-full bg-yellow-400">
                  <svg width="18" height="21" viewbox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.98504 19.606C8.98504 19.606 16.657 17.283 16.657 10.879C16.657 4.474 16.935 3.974 16.319 3.358C15.704 2.742 9.99104 0.75 8.98504 0.75C7.97904 0.75 2.26604 2.742 1.65004 3.358C1.03504 3.974 1.31304 4.474 1.31304 10.879C1.31304 17.283 8.98504 19.606 8.98504 19.606Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M10.864 11.8248L7.10596 8.06677" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M7.10608 11.8248L10.8641 8.06677" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <h3 class="mb-6 text-2xl font-semibold font-heading">Suspendisse interdum ullamcorper elit at?</h3>
                <p class="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-20">
              <div class="relative pt-12 px-6 pb-6 border rounded-2xl">
                <span class="absolute top-0 left-0 ml-8 -mt-8 flex justify-center items-center w-16 h-16 rounded-full bg-red-400">
                  <svg width="18" height="20" viewbox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4235 7.4478V5.3008C13.4235 2.7878 11.3855 0.7498 8.87249 0.7498C6.35949 0.7388 4.31349 2.7668 4.30249 5.2808V5.3008V7.4478" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6832 19.2496H5.04224C2.94824 19.2496 1.25024 17.5526 1.25024 15.4576V11.1686C1.25024 9.07359 2.94824 7.37659 5.04224 7.37659H12.6832C14.7772 7.37659 16.4752 9.07359 16.4752 11.1686V15.4576C16.4752 17.5526 14.7772 19.2496 12.6832 19.2496Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8.86292 12.2028V14.4238" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <h3 class="mb-6 text-2xl font-semibold font-heading">Suspendisse interdum ullamcorper elit at?</h3>
                <p class="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-20">
              <div class="relative pt-12 px-6 pb-6 border rounded-2xl">
                <span class="absolute top-0 left-0 ml-8 -mt-8 flex justify-center items-center w-16 h-16 rounded-full bg-blue-400">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9026 8.85114L13.4593 12.4642C12.6198 13.1302 11.4387 13.1302 10.5992 12.4642L6.11841 8.85114" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <h3 class="mb-6 text-2xl font-semibold font-heading">Suspendisse interdum ullamcorper elit at?</h3>
                <p class="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-20">
              <div class="relative pt-12 px-6 pb-6 border rounded-2xl">
                <span class="absolute top-0 left-0 ml-8 -mt-8 flex justify-center items-center w-16 h-16 rounded-full bg-teal-500">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 12.8056H1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M20.6299 8.5951V7.0821C20.6299 5.0211 18.9589 3.3501 16.8969 3.3501H15.6919" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M3.37012 8.5951V7.0821C3.37012 5.0211 5.04112 3.3501 7.10312 3.3501H8.33912" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M20.6299 12.8046V16.8786C20.6299 18.9406 18.9589 20.6116 16.8969 20.6116H15.6919" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M3.37012 12.8046V16.8786C3.37012 18.9406 5.04112 20.6116 7.10312 20.6116H8.33912" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <h3 class="mb-6 text-2xl font-semibold font-heading">Suspendisse interdum ullamcorper elit at?</h3>
                <p class="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-20">
              <div class="relative pt-12 px-6 pb-6 border rounded-2xl">
                <span class="absolute top-0 left-0 ml-8 -mt-8 flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
                  <svg width="22" height="18" viewbox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8877 7.89667C18.2827 7.70067 19.3567 6.50467 19.3597 5.05567C19.3597 3.62767 18.3187 2.44367 16.9537 2.21967" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M18.7285 11.2503C20.0795 11.4523 21.0225 11.9253 21.0225 12.9003C21.0225 13.5713 20.5785 14.0073 19.8605 14.2813" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8867 11.6638C7.67273 11.6638 4.92773 12.1508 4.92773 14.0958C4.92773 16.0398 7.65573 16.5408 10.8867 16.5408C14.1007 16.5408 16.8447 16.0588 16.8447 14.1128C16.8447 12.1668 14.1177 11.6638 10.8867 11.6638Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8867 8.88788C12.9957 8.88788 14.7057 7.17888 14.7057 5.06888C14.7057 2.95988 12.9957 1.24988 10.8867 1.24988C8.77766 1.24988 7.06766 2.95988 7.06766 5.06888C7.05966 7.17088 8.75666 8.88088 10.8587 8.88788H10.8867Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M4.88472 7.89667C3.48872 7.70067 2.41572 6.50467 2.41272 5.05567C2.41272 3.62767 3.45372 2.44367 4.81872 2.21967" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M3.04388 11.2503C1.69288 11.4523 0.749878 11.9253 0.749878 12.9003C0.749878 13.5713 1.19388 14.0073 1.91188 14.2813" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <h3 class="mb-6 text-2xl font-semibold font-heading">Suspendisse interdum ullamcorper elit at?</h3>
                <p class="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
```

## Components 
``` javascript
// HTML TO JSC COMPONETS


const data = {
  id: 1,
  title: "Frequently Asked Questions",
  text: "We have answers to your questions",
  questions: [
    { id: 1, question: "What is a hackathon?", answer: "A hackathon is a 24 hour event where students come together to build something cool. Is's a great opportunity to learn new skills, meet new people, and have fun!" },
    { id: 2, question: "What is a hackathon?", answer: "A hackathon is a 24 hour event where students come together to build something cool. Is's a great opportunity to learn new skills, meet new people, and have fun!" },
    { id: 3, question: "What is a hackathon?", answer: "A hackathon is a 24 hour event where students come together to build something cool. Is's a great opportunity to learn new skills, meet new people, and have fun!" },
    { id: 4, question: "What is a hackathon?", answer: "A hackathon is a 24 hour event where students come together to build something cool. Is's a great opportunity to learn new skills, meet new people, and have fun!" },
  ],
};

function FaqCard({ data }) {
  const { question, answer } = data;
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-20">
      <div className="relative pt-12 px-6 pb-6 border rounded-2xl">
        <span className="absolute top-0 left-0 ml-8 -mt-8 flex justify-center items-center w-16 h-16 rounded-full bg-orange-500">
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.98451 19.606C8.98451 19.606 16.6565 17.283 16.6565 10.879C16.6565 4.474 16.9345 3.974 16.3195 3.358C15.7035 2.742 9.99051 0.75 8.98451 0.75C7.97851 0.75 2.26551 2.742 1.65051 3.358C1.03451 3.974 1.31251 4.474 1.31251 10.879C1.31251 17.283 8.98451 19.606 8.98451 19.606Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M6.38593 9.87463L8.27793 11.7696L12.1759 7.86963"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
        <h3 className="mb-6 text-2xl font-semibold font-heading">
          {question}
        </h3>
        <p className="text-gray-500 leading-loose">
          {answer}
        </p>
      </div>
    </div>
  );
}

function Faqs({ data }) {
  const { title, text, questions } = data;
  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-3xl mx-auto mb-24 text-center">
        <span className="text-xs text-blue-400 font-semibold">
          {title}
        </span>
        <h2 className="mt-8 text-4xl font-semibold font-heading">
          {text}
        </h2>
      </div>
      <div className="flex flex-wrap -mx-3 -mb-20">
        {questions.map((item) => {
          return <FaqCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default function HomeRoute() {
  // const { data } = useLoaderData();
  return (
    <section>
      <Faqs data={data} />
    </section>
  );
}

```
