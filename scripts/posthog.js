!function(t,e){var o,r,s,a;e.__SV||(window.posthog=e,e._i=[],e.init=function(n,p,i){function c(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(s=t.createElement("script")).type="text/javascript",s.async=!0,s.src=p.api_host+"/static/array.js",(a=t.getElementsByTagName("script")[0]).parentNode.insertBefore(s,a);var g=e;for(void 0!==i?g=e[i]=[]:i="posthog",g.people=g.people||[],g.toString=function(t){var e="posthog";return"posthog"!==i&&(e+="."+i),t||(e+=" (stub)"),e},g.people.toString=function(){return g.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),r=0;r<o.length;r++)c(g,o[r]);e._i.push([n,p,i])},e.__SV=1)}(document,window.posthog||[]),posthog.init("phc_jwUuX2qv6ZMEACSLK7mT8TZoRC87RW0iH0mW2ULgYtu",{api_host:"https://app.posthog.com"});