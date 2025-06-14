( () => {
    function e(e, t, n, s) {
        Object.defineProperty(e, t, {
            get: n,
            set: s,
            enumerable: !0,
            configurable: !0
        })
    }
    var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire94c2
      , n = t.register;
    n("kRyoT", function(n, s) {
        e(n.exports, "GdprCmpController", () => a);
        var i = t("kzI06")
          , r = t("8QPZA")
          , o = t("8bfDC");
        class a extends i.CmpController {
            constructor(e, t, n) {
                super(e, t, n),
                this.consent = new r.GdprConsentModel(e.consent,{
                    uiVersion: null == n ? void 0 : n.uiVersion
                }),
                this.i18n = new o.GdprI18nModel(e.i18n)
            }
        }
    }),
    n("kzI06", function(n, s) {
        e(n.exports, "CmpController", () => D);
        var i = t("h2FSh")
          , r = t("kTJf3")
          , o = t("7nwmn")
          , a = t("7qJ26")
          , c = t("dIRcU")
          , u = t("bxjJO")
          , d = t("2hIpA")
          , l = t("8bfDC")
          , v = t("gUC9p")
          , p = t("6YDm0")
          , g = t("e08dO")
          , h = t("5CKHf")
          , f = t("5TDlN")
          , S = t("hN3Ja")
          , C = t("dH0Qb")
          , m = t("cnbVL")
          , y = t("N85OF")
          , b = t("3mZL4")
          , _ = t("96QDM");
        class D {
            isGppActive() {
                return !!this.gppService
            }
            getConsentDetails() {
                var e = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(t) {
                        return e.consent ? [2, {
                            consent: (0,
                            r._)({}, e.consent),
                            services: (0,
                            r._)({}, e.dps.services),
                            categories: (0,
                            r._)({}, e.dps.categories)
                        }] : [2]
                    })
                })()
            }
            fetchI18nDataForLanguage(e) {
                var t = this;
                return (0,
                i._)(function() {
                    var n, s, i, r, o, a, u, d, l, v;
                    return (0,
                    c.__generator)(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return [4, t.apiService.fetchI18nData({
                                language: e,
                                settingsId: t.setting.id,
                                settingsType: t.setting.type,
                                settingsVersion: t.setting.version,
                                activeTcfVendorsListVersion: null === (s = t.coreData) || void 0 === s ? void 0 : null === (n = s.tcf) || void 0 === n ? void 0 : n.vendorsListVersion,
                                previousTcfVendorsListVersion: t.consent && (null === (r = t.consent) || void 0 === r ? void 0 : null === (i = r.vendorsList) || void 0 === i ? void 0 : i.version) || (null === (a = t.coreData) || void 0 === a ? void 0 : null === (o = a.tcf) || void 0 === o ? void 0 : o.vendorsListVersion),
                                previousTcfPolicyVersion: t.consent && (null === (d = t.consent) || void 0 === d ? void 0 : null === (u = d.vendorsList) || void 0 === u ? void 0 : u.policyVersion) || (null === (v = t.coreData) || void 0 === v ? void 0 : null === (l = v.tcf) || void 0 === l ? void 0 : l.policyVersion),
                                theme: t.ui.theme
                            })];
                        case 1:
                            return [2, c.sent()]
                        }
                    })
                })()
            }
            initI18nData() {
                var e = this;
                return (0,
                i._)(function() {
                    var t, n, s, i;
                    return (0,
                    c.__generator)(this, function(r) {
                        switch (r.label) {
                        case 0:
                            if (!(!e.englishI18nFallbackData && "en" !== e.ui.language))
                                return [3, 2];
                            return [4, e.fetchI18nDataForLanguage("en")];
                        case 1:
                            e.englishI18nFallbackData = r.sent(),
                            r.label = 2;
                        case 2:
                            return [4, e.fetchI18nDataForLanguage(e.ui.language)];
                        case 3:
                            if (!(t = r.sent()))
                                return [2];
                            return n = t,
                            e.englishI18nFallbackData && (n = e.mergeWithFallback(t, e.englishI18nFallbackData)),
                            (0,
                            l.isGdprI18nData)(n) ? e.i18n = new l.GdprI18nModel(n) : (0,
                            v.isTcfI18nData)(n) ? (e.i18n = new v.TcfI18nModel(n),
                            (null === (i = e.tcf) || void 0 === i ? void 0 : null === (s = i.acm) || void 0 === s ? void 0 : s.vendors) && e.tcf.updateAcmVendorsPurposes(e.i18n.tcf.acm.vendorsPurposes)) : (0,
                            p.isCcpaI18nData)(n) && (e.i18n = new p.UsI18nModel(n)),
                            [2]
                        }
                    })
                })()
            }
            mergeWithFallback(e, t) {
                if ("object" != typeof e || null === e)
                    return e;
                if (Array.isArray(e) && Array.isArray(t))
                    return e.map( (e, n) => "object" == typeof e && null !== e && "object" == typeof t[n] ? this.mergeWithFallback(e, t[n]) : null != e ? e : t[n]);
                var n = (0,
                r._)({}, t);
                for (var s in e)
                    void 0 !== e[s] && null !== e[s] && "" !== e[s] && (n[s] = "object" == typeof e[s] && "object" == typeof t[s] ? this.mergeWithFallback(e[s], t[s]) : e[s]);
                return n
            }
            clearStorage() {
                var e = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(t) {
                        return [2, e.consentService.clearConsentsLocally()]
                    })
                })()
            }
            unblockScriptsWithConsent() {
                var e = this;
                return (0,
                i._)(function() {
                    var t, n;
                    return (0,
                    c.__generator)(this, function(s) {
                        return t = e.dps.getAcceptedServices("name"),
                        n = e.dps.getAcceptedServices("id"),
                        [2, e.scriptService.unblockScripts(t, n)]
                    })
                })()
            }
            getControllerId() {
                var e;
                return null === (e = this.consent) || void 0 === e ? void 0 : e.controllerId
            }
            getLanguage() {
                return this.ui.getLanguage()
            }
            getIsConsentRequired() {
                var e;
                return null === (e = this.consent) || void 0 === e ? void 0 : e.required
            }
            changeLanguage(e) {
                var t = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(n) {
                        switch (n.label) {
                        case 0:
                            if (!t.languages.getHasLanguage(e))
                                return [2];
                            return t.ui.setLanguage(e),
                            t.localStorageService.setUiData({
                                language: e
                            }),
                            [4, t.initI18nData()];
                        case 1:
                            return n.sent(),
                            [2]
                        }
                    })
                })()
            }
            setAnalyticsPixel(e, t) {
                var n;
                null === (n = this.analyticsService) || void 0 === n || n.setAnalyticsPixel(e, t)
            }
            dispatchViewChanged(e, t) {
                (0,
                m.V2BridgeCustomEvents).dispatchUcUiViewChangedEvent({
                    previousView: e,
                    view: t
                })
            }
            signalIABViewChanged(e, t) {
                this.gppService && ("first" === t || "second" === t ? this.gppService.setCmpDisplayVisible() : this.gppService.setCmpDisplayHidden(),
                this.gppService.setCmpSignalReady(),
                this.gppService.setCmpStatusLoaded()),
                this.tcf && (("none" === e || "button" === e) && ("first" === t || "second" === t) ? this.tcf.setUIOpen() : ("first" === e || "second" === e) && ("none" === t || "button" === t) && this.tcf.setUIClosed())
            }
            acceptAllConsents() {
                var e = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(t) {
                        return e.tcf && e.tcf.acceptAll(),
                        e.dps.acceptAll(),
                        [2]
                    })
                })()
            }
            denyAllConsents() {
                var e = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(t) {
                        return e.tcf && e.tcf.denyAll(),
                        e.dps.denyAll(),
                        [2]
                    })
                })()
            }
            updateServicesConsents(e) {
                var t = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(n) {
                        return t.dps.updateSome(e),
                        [2]
                    })
                })()
            }
            updateServiceConsent(e) {
                var t = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(n) {
                        return t.dps.updateSome([e]),
                        [2]
                    })
                })()
            }
            updateCategoriesConsents(e) {
                var t = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(n) {
                        return t.dps.updateCategoriesConsents(e),
                        [2]
                    })
                })()
            }
            updateCategoryConsent(e) {
                var t = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(n) {
                        return t.dps.updateCategoriesConsents([e]),
                        [2]
                    })
                })()
            }
            saveConsents() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "EXPLICIT"
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = this;
                return (0,
                i._)(function() {
                    var s, i, r, o, a, u, d;
                    return (0,
                    c.__generator)(this, function(c) {
                        switch (c.label) {
                        case 0:
                            if (!n.consent)
                                return [3, 2];
                            return n.consent.setUiVersion(),
                            n.consent.setRequired(!1),
                            n.consent.setSetting(n.setting),
                            n.consent.setLanguage(n.ui.getLanguage()),
                            n.consent.setUpdatedAt(Date.now()),
                            i = n.consent.hash,
                            n.consent.setHash((0,
                            b.sha256)(n.consent.updatedAt.toString())),
                            "US" === n.setting.type ? (r = "ALL_DENIED" === n.dps.getConsentStatus(),
                            (o = n.consent).setHasOptedOut(r),
                            o.emitCcpaString()) : t ? n.consent.setUpdatedBy("onUpdateServices") : n.consent.setUpdatedBy(n.dps.updatedBy || (null === (s = n.tcf) || void 0 === s ? void 0 : s.updatedBy) || "onUpdateServices"),
                            n.dps.updatedBy = void 0,
                            n.tcf && (n.tcf.updatedBy = void 0),
                            n.consent.setStatus(n.dps.getConsentStatus()),
                            n.consent.setServiceIds(n.dps.getConsentServiceIds()),
                            n.consent.setType(e),
                            n.tcf && (n.tcf.applySpecialCasesForVendors(),
                            a = n.tcf.generateTcString(),
                            (u = n.consent).setTcString(a),
                            n.tcf.acm && (d = n.tcf.getACString(),
                            u.setAcString(d),
                            n.tcf.setAddtlConsent(d)),
                            n.tcf.refreshTimestamp(),
                            n.tcf.updateTcfApi(a)),
                            [4, n.applyConsents(i, t)];
                        case 1:
                            c.sent(),
                            c.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                })()
            }
            saveConsentRemotely() {
                var e = this;
                return (0,
                i._)(function() {
                    var t, n;
                    return (0,
                    c.__generator)(this, function(s) {
                        switch (s.label) {
                        case 0:
                            if (!(e.consent && !e.consent.isBot))
                                return [3, 2];
                            return t = e.tcf && Object.entries(e.tcf.vendors).map(e => {
                                var t = (0,
                                a._)(e, 2)
                                  , n = t[0]
                                  , s = t[1];
                                return [+n, s.legIntPurposes, s.purposes, s.specialPurposes]
                            }
                            ),
                            n = (0,
                            r._)({
                                consent: e.consent,
                                services: e.dps.services,
                                settingsType: e.setting.type,
                                ucString: e.localStorageService.getConsentString(),
                                consentWebhookEnabled: e.consentWebhookEnabled,
                                crossDeviceEnabled: e.crossDeviceEnabled,
                                analyticsEnabled: void 0 !== e.analyticsService
                            }, t && {
                                vendors: t
                            }),
                            [4, e.consentService.saveConsentRemotely(n)];
                        case 1:
                            s.sent(),
                            s.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                })()
            }
            areAllConsentsAccepted() {
                return "ALL_ACCEPTED" === this.dps.getConsentStatus()
            }
            areAllConsentsDenied() {
                return "ALL_DENIED" === this.dps.getConsentStatus()
            }
            getServiceInfo(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = this;
                return (0,
                i._)(function() {
                    var s;
                    return (0,
                    c.__generator)(this, function(i) {
                        switch (i.label) {
                        case 0:
                            if (!(s = n.dps.getService(e)))
                                return [2];
                            if (!(!n.i18n || t && !n.i18n.getServiceHasDetails(e)))
                                return [3, 2];
                            return [4, n.initI18nData()];
                        case 1:
                            i.sent(),
                            i.label = 2;
                        case 2:
                            if (n.i18n)
                                return [2, {
                                    service: s,
                                    i18n: n.i18n.getService(e)
                                }];
                            return [2]
                        }
                    })
                })()
            }
            getStoredInfoByUrl(e) {
                var t = this;
                return (0,
                i._)(function() {
                    var n, s, i, a, u, d, l, v, p, h, f, S, C, m, y, b, _, D, I, w, E, A, L, T, M, V, U, k, P, B, x, O, F;
                    return (0,
                    c.__generator)(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return n = {},
                            [4, t.apiService.fetchStoredInfoData(e)];
                        case 1:
                            if (s = c.sent(),
                            i = "TCF" === t.setting.getType(),
                            void 0 !== t.i18n)
                                return [3, 3];
                            return [4, t.initI18nData()];
                        case 2:
                            return c.sent(),
                            [3, 4];
                        case 3:
                            u = (a = t.i18n.base.cookieInformation).anyDomain,
                            d = a.cookieRefresh,
                            l = a.domain,
                            v = a.multipleDomains,
                            h = void 0 === (p = a.duration) ? "duration" : p,
                            f = a.no,
                            C = void 0 === (S = a.type) ? "type" : S,
                            m = a.yes,
                            b = (y = t.i18n.base).purposes,
                            _ = y.day,
                            D = y.days,
                            I = y.hour,
                            w = y.hours,
                            E = y.minute,
                            A = y.minutes,
                            L = y.month,
                            T = y.months,
                            M = y.second,
                            V = y.seconds,
                            U = y.session,
                            k = y.year,
                            P = y.years,
                            s && (B = s.disclosures,
                            x = s.domains,
                            O = [],
                            F = [],
                            B.map(e => {
                                var n = e.cookieRefresh
                                  , s = e.description
                                  , a = e.domain
                                  , c = e.identifier
                                  , p = e.maxAgeSeconds
                                  , S = e.name
                                  , y = e.type
                                  , B = e.purposes
                                  , x = "";
                                if (i && B && (null == B ? void 0 : B.length) > 0) {
                                    var F = [];
                                    B.forEach(e => {
                                        var n;
                                        (null === (n = t.tcf) || void 0 === n ? void 0 : n.purposes[e]) && F.push(t.tcf.purposes[e].name)
                                    }
                                    ),
                                    x = `${F.join("; ")}`
                                }
                                var N = [];
                                N.push({
                                    label: C,
                                    value: `${y}`,
                                    id: "type"
                                }),
                                "cookie" === y.toString() && N.push({
                                    label: h,
                                    value: (0,
                                    g.convertCookieMaxAge)(p, {
                                        day: _,
                                        days: D,
                                        hour: I,
                                        hours: w,
                                        minute: E,
                                        minutes: A,
                                        month: L,
                                        months: T,
                                        second: M,
                                        seconds: V,
                                        session: U,
                                        year: k,
                                        years: P
                                    }),
                                    id: "duration"
                                }),
                                null !== n && N.push({
                                    label: d,
                                    value: n ? m : f,
                                    id: "cookieRefresh"
                                }),
                                a && N.push({
                                    label: l,
                                    value: (0,
                                    g.convertDomain)(a, u, v),
                                    id: "domain"
                                }),
                                i && "" !== x && N.push({
                                    label: b || "Purposes",
                                    value: x,
                                    id: "purposes"
                                }),
                                O.push((0,
                                o._)((0,
                                r._)({
                                    id: null != S ? S : c,
                                    name: null != S ? S : c
                                }, s && {
                                    description: s
                                }), {
                                    body: N
                                }))
                            }
                            ),
                            i && (null == x || x.map(e => {
                                var t = e.domain
                                  , n = e.use;
                                F.push({
                                    id: t,
                                    name: t,
                                    body: [...n ? [{
                                        label: b || "Purposes",
                                        value: n,
                                        id: "domains"
                                    }] : []]
                                })
                            }
                            )),
                            O.length > 0 && (n.disclosures = O),
                            F.length > 0 && (n.domains = F)),
                            c.label = 4;
                        case 4:
                            return [2, n]
                        }
                    })
                })()
            }
            applyConsents(e, t) {
                var n = this;
                return (0,
                i._)(function() {
                    var s, i, r, o, a, u, d, l, v, p, f, S;
                    return (0,
                    c.__generator)(this, function(c) {
                        switch (c.label) {
                        case 0:
                            if (!n.consent)
                                throw Error("No consents");
                            if (i = n.consent.hash !== e,
                            n.gcm && n.gcm.apply(n.consent.type, n.dps.services, n.advertiserConsentModeEnabled ? null === (s = n.tcf) || void 0 === s ? void 0 : s.vendors[755] : void 0),
                            n.uet && n.uet.apply(n.dps.services, n.consent.type),
                            !i)
                                return [3, 2];
                            return [4, n.consentService.saveConsentLocally(n.consent, n.dps)];
                        case 1:
                            c.sent(),
                            n.gppService && (o = "",
                            (0,
                            h.isUsConsentModel)(n.consent) && (o = n.consent.ccpaString,
                            a = n.consent.legislation),
                            (0,
                            h.isTcfConsentModel)(n.consent) && (o = n.consent.tcString),
                            null === (r = n.gppService) || void 0 === r || r.setSectionString(o, n.setting.type, a)),
                            c.label = 2;
                        case 2:
                            if (setTimeout( () => {
                                n.unblockScriptsWithConsent()
                            }
                            , 0),
                            !(n.customEventService || n.dataLayerService))
                                return [3, 4];
                            return [4, n.getConsentDetails()];
                        case 3:
                            (u = c.sent()) && (n.customEventService.dispatchConsentDetails(u),
                            null === (d = n.dataLayerService) || void 0 === d || d.push((0,
                            m.V2BridgeCustomEvents).getConsentDetailsV2(u))),
                            c.label = 4;
                        case 4:
                            if (!i)
                                return [3, 6];
                            return n.saveConsentRemotely().catch( () => {
                                (0,
                                g.UCConsole).error("CmpController - saveConsentRemotely", "Could not save consents")
                            }
                            ),
                            v = (l = n.customEventService).dispatch,
                            p = ["UC_CONSENT_CHANGED"],
                            [4, n.getConsentDetails()];
                        case 5:
                            return v.apply(l, p.concat([c.sent()])),
                            [3, 7];
                        case 6:
                            (null == (f = n.localStorageService.getUcData()) ? void 0 : f.consent) || (S = n.consentService.mapServicesData(n.dps.services),
                            n.localStorageService.setConsentData({
                                services: S
                            })),
                            c.label = 7;
                        case 7:
                            return (0,
                            _.webSdkEvents).emit("CONSENTS_APPLIED", {
                                fromEmbeddings: t
                            }),
                            [2]
                        }
                    })
                })()
            }
            getPrivacyButtonTheme(e) {
                var t = this.languages.getLanguageScreenDirection(this.ui.getLanguage());
                return this.theme.getPrivacyButtonTheme({
                    custom: e,
                    direction: t
                })
            }
            getEmbeddingTheme(e) {
                var t = this.languages.getLanguageScreenDirection(this.ui.getLanguage());
                return this.theme.getEmbeddingsTheme({
                    custom: e,
                    direction: t
                })
            }
            getCmpTheme(e, t) {
                var n = this.languages.getLanguageScreenDirection(this.ui.getLanguage());
                return this.theme.getCmpTheme(e, {
                    custom: t,
                    direction: n
                })
            }
            getThemeDefaults() {
                this.theme.getThemeDefaults()
            }
            updateTheme(e) {
                e && (this.theme = new d.ThemeModel(e))
            }
            getCmpConfig() {
                var e = this;
                return (0,
                i._)(function() {
                    var t, n;
                    return (0,
                    c.__generator)(this, function(s) {
                        return [2, {
                            i18n: (0,
                            r._)({}, (null === (t = e.i18n) || void 0 === t ? void 0 : t.base.poweredBy.isEnabled) && {
                                poweredBy: null === (n = e.i18n) || void 0 === n ? void 0 : n.base.poweredBy
                            })
                        }]
                    })
                })()
            }
            getServices() {
                var e = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(t) {
                        return [2, Object.entries(e.dps.services)]
                    })
                })()
            }
            getCategories() {
                var e = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(t) {
                        return [2, Object.entries(e.dps.categories)]
                    })
                })()
            }
            getLanguages() {
                var e = this;
                return (0,
                i._)(function() {
                    return (0,
                    c.__generator)(this, function(t) {
                        return [2, Object.entries(e.languages.languages)]
                    })
                })()
            }
            constructor(e, t, n) {
                var s = t.apiService
                  , i = t.consentService
                  , r = t.localStorageService
                  , o = t.analyticsService
                  , a = t.gppService;
                this.englishI18nFallbackData = null;
                var c = (0,
                y.getCombinedCmpData)(e, n);
                (0,
                _.webSdkEvents).emit("CMP_DATA_COMBINED", c);
                var l = c.dps
                  , v = c.gcm
                  , p = c.uet
                  , g = c.core
                  , h = c.integrations
                  , m = c.setting
                  , b = c.ui
                  , D = c.languages
                  , I = c.theme
                  , w = c.template;
                this.coreData = null == n ? void 0 : n.settingsCoreData,
                this.apiService = s,
                this.analyticsService = o,
                this.consentService = i,
                this.customEventService = new u.CustomEventService(g.customEvents || []),
                this.gppService = a,
                this.localStorageService = r,
                this.scriptService = new u.ScriptService,
                g.dataLayers && (this.dataLayerService = new u.DataLayerService(g.dataLayers)),
                this.consentWebhookEnabled = null == n ? void 0 : n.isConsentWebhookEnabled,
                this.crossDeviceEnabled = null == n ? void 0 : n.isCrossDeviceEnabled,
                this.advertiserConsentModeEnabled = e.core.advertiserConsentModeEnabled,
                this.ui = new d.UiModel(b),
                this.languages = new d.LanguagesModel(D),
                this.setting = new d.SettingModel(m),
                this.dps = new d.DpsModel(l),
                this.theme = new d.ThemeModel(I || {}),
                w && (this.template = new d.TemplateModel(w)),
                h && (this.integrations = new S.IntegrationsModel(h)),
                v && (this.gcm = new f.GoogleConsentModeModel(v,r,this.customEventService)),
                p && (this.uet = new C.UetModel(this.customEventService))
            }
        }
    }),
    n("8bfDC", function(n, s) {
        e(n.exports, "GdprI18nModel", () => r),
        e(n.exports, "isGdprI18nData", () => o);
        var i = t("14GuN");
        class r extends i.I18nModel {
            constructor(e) {
                super(e),
                this.gdpr = e.gdpr
            }
        }
        var o = e => "gdpr"in e
    }),
    n("gUC9p", function(n, s) {
        e(n.exports, "TcfI18nModel", () => r),
        e(n.exports, "isTcfI18nData", () => o);
        var i = t("14GuN");
        class r extends i.I18nModel {
            constructor(e) {
                super(e),
                this.tcf = e.tcf
            }
        }
        var o = e => "tcf"in e
    }),
    n("6YDm0", function(n, s) {
        e(n.exports, "UsI18nModel", () => r),
        e(n.exports, "isCcpaI18nData", () => o);
        var i = t("14GuN");
        class r extends i.I18nModel {
            constructor(e) {
                super(e),
                this.ccpa = e.ccpa
            }
        }
        var o = e => "ccpa"in e
    }),
    n("5CKHf", function(t, n) {
        e(t.exports, "isUsConsentModel", () => s),
        e(t.exports, "isTcfConsentModel", () => i);
        var s = e => "US" === e.setting.type
          , i = e => "TCF" === e.setting.type
    }),
    n("hN3Ja", function(t, n) {
        e(t.exports, "IntegrationsModel", () => s);
        class s {
            getScripts() {
                return this.scripts
            }
            constructor(e) {
                var t = e.scripts;
                this.scripts = t
            }
        }
    }),
    n("dH0Qb", function(n, s) {
        e(n.exports, "UetModel", () => r);
        var i = t("7qJ26");
        class r {
            getUetState(e) {
                return Object.entries(e).reduce( (e, t) => {
                    var n, s, r, o = (0,
                    i._)(t, 2)[1];
                    return (null === (n = o.uet) || void 0 === n ? void 0 : n.adStorage) !== void 0 && (e.adStorage = (null === (s = o.consent) || void 0 === s ? void 0 : s.type) === "EXPLICIT" && (null === (r = o.consent) || void 0 === r ? void 0 : r.given) && (!0 === e.adStorage || void 0 === e.adStorage)),
                    e
                }
                , {})
            }
            push(e) {
                var t = e.adStorage;
                window.uetq = window.uetq || [],
                window.uetq.push("consent", "update", {
                    ad_storage: t
                }),
                this.customEventService.dispatchUcUetUpdateEvent(e)
            }
            apply(e, t) {
                if ((null === (s = window.ucCmpConfig) || void 0 === s || null === (n = s.uetConfig) || void 0 === n || !n.disabled) && "EXPLICIT" === t) {
                    var n, s, i = this.getUetState(e).adStorage;
                    void 0 !== i && this.push({
                        adStorage: i ? "granted" : "denied"
                    })
                }
            }
            constructor(e) {
                this.customEventService = e
            }
        }
    }),
    n("N85OF", function(n, s) {
        e(n.exports, "getCombinedCmpData", () => l);
        var i = t("7qJ26")
          , r = t("bY6u9")
          , o = t("2hIpA")
          , a = t("3mZL4")
          , c = e => (new Date().getTime() - e) / 864e5
          , u = (e, t) => !!(t && e && c(e) > t)
          , d = (e, t) => !!(t && e && Date.now() / 1e3 > t && e / 1e3 < t)
          , l = (e, t) => {
            var n, s, c = e.consent, l = (t || {}).consentData, v = Date.now();
            if (c.uiVersion || (c.uiVersion = (null === (n = window.__ucMock) || void 0 === n ? void 0 : n.uiVersion) || (null == l ? void 0 : l.uiVersion) || (null == t ? void 0 : t.uiVersion)),
            !c.controllerId && (null == l ? void 0 : l.controllerId) && (c.controllerId = l.controllerId),
            !c.controllerId && (null === (s = window.__ucMock) || void 0 === s ? void 0 : s.controllerId) && (c.controllerId = window.__ucMock.controllerId),
            c.createdAt || (c.createdAt = (null == l ? void 0 : l.createdAt) || v),
            c.updatedAt || (e.consent.updatedAt = (null == l ? void 0 : l.updatedAt) || v),
            !c.tcString && (null == l ? void 0 : l.tcString) && (e.consent.tcString = l.tcString),
            "onInitialPageLoad" === e.consent.updatedBy && (null == l ? void 0 : l.updatedBy) && (e.consent.updatedBy = l.updatedBy),
            navigator.globalPrivacyControl && "US" === e.setting.type && "onDenyAllServices" === e.consent.updatedBy && (null == l ? void 0 : l.gpcSignal) && (e.consent.gpcSignal = !0),
            d(e.consent.updatedAt, e.ui.renewConsentsTimestamp) ? e.ui.initialView = "first" : u(e.consent.updatedAt, e.ui.reshowAfterDays) ? e.ui.initialView = "first" : e.ui.initialView || (e.ui.initialView = (null == l ? void 0 : l.type) === "EXPLICIT" || (null == l ? void 0 : l.updatedBy) === "onMobileSessionRestore" ? e.ui.closedView : "first"),
            e.consent.required = e.ui.initialView !== e.ui.closedView,
            navigator.globalPrivacyControl && "US" === e.setting.type && (!l || "IMPLICIT" === l.type)) {
                var p = new o.DpsModel(e.dps);
                p.denyAll(),
                e.dps = p,
                e.consent.gpcSignal = !0,
                e.consent.type = "EXPLICIT",
                e.consent.updatedBy = "onDenyAllServices";
                var g = e.consent.ccpaString;
                e.consent.ccpaString = g.charAt(0) + g.charAt(1) + "Y" + g.charAt(3),
                e.consent.status = p.getConsentStatus()
            } else if (null == l ? void 0 : l.status) {
                e.consent.type = l.type,
                e.consent.serviceIds = l.serviceIds,
                e.dps.services = Object.entries(e.dps.services).reduce( (e, t) => {
                    var n, s, r = (0,
                    i._)(t, 2), o = r[0], a = r[1];
                    return "added" !== a.status && (null == a ? void 0 : a.consent) && (a.consent.given = a.essential || "ALL_ACCEPTED" === l.status || "SOME_ACCEPTED" === l.status && (null === (n = l.serviceIds) || void 0 === n ? void 0 : n.includes(o)) || "SOME_DENIED" === l.status && !(null === (s = l.serviceIds) || void 0 === s ? void 0 : s.includes(o)),
                    a.consent.type = l.type),
                    e[o] = a,
                    e
                }
                , {}),
                e.dps.categories = (0,
                r.getCategoriesWithServicesConsent)(e.dps.categories, e.dps.services);
                var h = new o.DpsModel(e.dps);
                e.consent.status = h.getConsentStatus()
            } else {
                var f = new o.DpsModel(e.dps);
                e.consent.status = f.getConsentStatus(),
                e.consent.serviceIds = f.getConsentServiceIds()
            }
            return !e.consent.hash && (e.consent.hash = (0,
            a.sha256)(e.consent.updatedAt.toString()),
            l && l.hash && l.hash !== e.consent.hash && (e.consent.updatedBy = "onEssentialChange")),
            e
        }
    })
}
)();
