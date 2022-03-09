const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'policyNoteGoogleMap';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {

    const policyNoteGoogleMap = document.getElementById('googleMapAccept');

    if (!shouldShowPopup(storageType)) {
        document.getElementById('googleMapIFrame').src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10603.816637161954!2d10.8723565!3d48.3614045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68c2861635f90e63!2sKanzlei%20Knoll!5e0!3m2!1sde!2sde!4v1638454782710!5m2!1sde!2sde";
        policyNoteGoogleMap.classList.add('hidden');
    }

    const acceptBtn = document.getElementById('googleMapAcceptButton');

    const acceptFn = event => {
        saveToStorage(storageType);
        document.getElementById('googleMapIFrame').src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10603.816637161954!2d10.8723565!3d48.3614045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68c2861635f90e63!2sKanzlei%20Knoll!5e0!3m2!1sde!2sde!4v1638454782710!5m2!1sde!2sde";
        policyNoteGoogleMap.classList.add('hidden');
    }

    acceptBtn.addEventListener('click', acceptFn);
};
