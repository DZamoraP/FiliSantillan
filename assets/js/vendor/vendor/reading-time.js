!function(e){e.fn.readingTime=function(t){if(!this.length)return this;var n={readingTimeTarget:".eta",wordCountTarget:null,wordsPerMinute:270,round:!0,lang:"en",lessThanAMinuteString:"",prependTimeString:"",prependWordString:"",remotePath:null,remoteTarget:null},i=this,r=e(this);i.settings=e.extend({},n,t);var s=i.settings.readingTimeTarget,a=i.settings.wordCountTarget,g=i.settings.wordsPerMinute,u=i.settings.round,o=i.settings.lang,l=i.settings.lessThanAMinuteString,d=i.settings.prependTimeString,m=i.settings.prependWordString,f=i.settings.remotePath,h=i.settings.remoteTarget;if("it"==o)var v=l||"Meno di un minuto",T="min";else if("fr"==o)var v=l||"Moins d'une minute",T="min";else if("de"==o)var v=l||"Weniger als eine Minute",T="min";else if("es"==o)var v=l||"Menos de un minuto",T="min";else if("nl"==o)var v=l||"Minder dan een minuut",T="min";else var v=l||"Less than a minute",T="min";var M=function(t){var n=t.trim().split(/\s+/g).length,i=g/60,r=n/i;if(u===!0)var o=Math.round(r/60);else var o=Math.floor(r/60);var l=Math.round(r-60*o);if(u===!0)o>0?e(s).text(d+o+" "+T):e(s).text(d+v);else{var f=o+":"+l;e(s).text(d+f)}""!==a&&void 0!==a&&e(a).text(m+n)};r.each(function(){null!=f&&null!=h?e.get(f,function(t){M(e("<div>").html(t).find(h).text())}):M(r.text())})}}(jQuery);