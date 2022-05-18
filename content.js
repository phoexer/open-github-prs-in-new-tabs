function openTabs() {
    const links = document.querySelectorAll('[id^="issue_"][id$="_link"]');
    for(const link of links){
        window.open(link.href, '_blank')
    }
}
openTabs()
