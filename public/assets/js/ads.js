let areAdsDisabled = JSON.parse(localStorage.getItem('adsDisabled'));

if (areAdsDisabled === null) {
    areAdsDisabled = false;
}

if (!areAdsDisabled) {
    enableAds();
}

document.getElementById('toggleAds').addEventListener('change', function () {
    areAdsDisabled = !areAdsDisabled;
    localStorage.setItem('adsDisabled', JSON.stringify(areAdsDisabled));

    if (areAdsDisabled) {
        disableAds();
        alert('Ads Disabled');
    } else {
        enableAds();
        alert('Ads Enabled');
    }
});

document.getElementById('toggleAds').checked = !areAdsDisabled;

function enableAds() {
    const firstScriptElement = document.createElement('script');
    firstScriptElement.type = 'text/javascript';
    firstScriptElement.src = '//pl23437985.highcpmgate.com/c8/b6/20/c8b620abc68d447cdfa589f05cf268ab.js';
    firstScriptElement.async = true;
    document.body.appendChild(firstScriptElement);

    const secondScriptElement = document.createElement('script');
    secondScriptElement.type = 'text/javascript';
    secondScriptElement.src = '//pl23438018.highcpmgate.com/70/ec/e0/70ece0f2b7c243cf0b6a419054241884.js';
    secondScriptElement.async = true;
    document.body.appendChild(secondScriptElement);
}

function disableAds() {
    const firstScriptElement = document.querySelector('script[src="//pl23437985.highcpmgate.com/c8/b6/20/c8b620abc68d447cdfa589f05cf268ab.js"]');
    if (firstScriptElement) {
        firstScriptElement.remove();
    }

    const secondScriptElement = document.querySelector('script[src="//pl23438018.highcpmgate.com/70/ec/e0/70ece0f2b7c243cf0b6a419054241884.js"]');
    if (secondScriptElement) {
        secondScriptElement.remove();
    }
}