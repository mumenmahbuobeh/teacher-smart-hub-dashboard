const { translate } = require('@vitalets/google-translate-api');
(async () => {
    try {
        const res = await translate('مرحبا بك', { to: 'en' });
        console.log(res.text);
    } catch(err) {
        console.error(err);
    }
})();
