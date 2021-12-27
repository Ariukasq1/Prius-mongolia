export default (containerId: string, checked: boolean) => {
  const container = typeof window !== 'undefined' && document.getElementById(containerId);

  if (!container) {
    return;
  }

  const elements = container.getElementsByTagName('input');

  // tslint:disable-next-line
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (element.type === 'checkbox') {
      element.checked = checked;
    }
  }
};
