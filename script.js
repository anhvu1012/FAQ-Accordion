const questionContainers = Array.from(document.querySelectorAll('section header'));

const toggleAnswer = (id) => {
  const input = document.getElementById(`${id}`).getElementsByTagName('input')[0];

  // console.log(input.src);
  
  const answerContainer = document.getElementById(`${id}-answer`);

  answerContainer.classList.toggle('hidden');

  if (!answerContainer.classList.contains('hidden')){
    input.src = "assets/images/icon-minus.svg";
  } else{
    input.src = "assets/images/icon-plus.svg";
  }
};

questionContainers.forEach((question) => {
  question.addEventListener('click', (event) => {
    const headerId = event.currentTarget.id;

    toggleAnswer(headerId);
  });
});