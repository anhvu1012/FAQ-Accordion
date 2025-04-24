const questionContainers = Array.from(document.querySelectorAll('section header'));

const displayAnswer = (id) => {
  if (!id) {
    return;
  }
  else {
    const answerContainer = document.getElementById(`${id}-answer`);

    answerContainer.classList.toggle('hidden');
  }
};

questionContainers.forEach((question) => {
  question.addEventListener('click', (event) => {
    // console.log(event.currentTarget);

    const sectionId = event.currentTarget.id;

    displayAnswer(sectionId);
  });
});