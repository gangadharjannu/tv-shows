function formatDay(dateString) {
  const date = new Date(dateString);
  const formattedDate = date
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .replace(/ /g, '-');
  return formattedDate;
}

export default formatDay;
