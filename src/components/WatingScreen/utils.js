const CurrentDate = () => {
    const today = new Date();
    const curentDay = parseInt(String(today.getDate()).padStart(2, '0'));
    const curentMonth = parseInt(String(today.getMonth() + 1).padStart(2, '0')); //January is 0!
    const curentYear = today.getFullYear();
    return {curentDay, curentMonth, curentYear};
  };

  const varifayAge = dateOfBirth => {
    const {curentDay, curentMonth, curentYear} = CurrentDate();
    const {userBirthDay, userBirthMonth, userBirthYear} =
      extractVerifiedDateOfBirth(dateOfBirth);

    if (curentYear - userBirthYear > 18) {
      return true;
    } else if (curentYear - userBirthYear === 18) {
      if (userBirthMonth > curentMonth) {
        return true;
      } else if (userBirthMonth === curentMonth) {
        if (userBirthDay >= curentDay) return true;
      }
    }
    return false;
  };

  const extractVerifiedDateOfBirth = dateOfBirth => {
    const splitedUserdateOfBirth = dateOfBirth.split('-');
    const userBirthDay = parseInt(splitedUserdateOfBirth[2]);
    const userBirthMonth = parseInt(splitedUserdateOfBirth[1]);
    const userBirthYear = parseInt(splitedUserdateOfBirth[0]);
    return {userBirthDay, userBirthMonth, userBirthYear};
  };

  export {  varifayAge }