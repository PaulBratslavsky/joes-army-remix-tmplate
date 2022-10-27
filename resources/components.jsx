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
