# KBCG LLC PagesStructure for the 5 Iframe Pages

All 5 pages follow the same shape: **unlisted** (not in nav menu, not in sitemap, not indexed by search engines) but **fully accessible by direct link**, since Kevin's team will be manually sending clients the right link after payment.

## How to make a page "unlisted" (do this for all 5)

- Do **not** add it to your site's main navigation/menu
- Do **not** internally link to it from any public page
- Set the page's SEO/meta settings to **noindex** (most site builders have a toggle under Page Settings → SEO → "Hide from search engines" or a `<meta name="robots" content="noindex">` tag if you're hand-coding)
- Leave it out of your sitemap.xml if your builder auto-generates one, or exclude it manually
- The link still works for anyone who has itthat's the point, it's just not discoverable by browsing or Google

---

## Page 1: LLC DissolutionShort Intake

- **Suggested URL:** `/llc-dissolution-form` (or wherever your existing `llc-dissolution.html` page content pointsthis iframe replaces the custom form section in that page)
- **Purpose:** Phase 1pre-payment capture (name, contact, tier selection)
- **Embed:** the "LLC Dissolution Form" iframepaste this exact code:

```html
<iframe
    src="https://api.kbrownconsultant.com/widget/form/9v2H02FKbVXcABdJ9XBL"
    style="width:100%;height:100%;border:none;border-radius:0px"
    id="inline-9v2H02FKbVXcABdJ9XBL" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="LLC Dissolution"
    data-height="638"
    data-layout-iframe-id="inline-9v2H02FKbVXcABdJ9XBL"
    data-form-id="9v2H02FKbVXcABdJ9XBL"
    data-cookie-consent="true"
    data-cookie-consent-provider="auto"
    title="LLC Dissolution"
        >
</iframe>
<script src="https://api.kbrownconsultant.com/js/form_embed.js"></script>
```
- **Where it fits on the page:** drop this in place of the `[ GHL IFRAME GOES HERE ]` placeholder in the "Your Information" section of the Dissolution landing page content you already havethe tier cards and hero content stay as-is around it
- **Sent to:** anyone browsing the site who clicks through from the LLC Services landing page

## Page 2: LLC FormationShort Intake

- **Suggested URL:** `/llc-formation-form`
- **Purpose:** Phase 1pre-payment capture
- **Embed:** the "LLC Formation Form" iframepaste this exact code:

```html
<iframe
    src="https://api.kbrownconsultant.com/widget/form/alp4aaUEg0JmsfytdKuk"
    style="width:100%;height:100%;border:none;border-radius:0px"
    id="inline-alp4aaUEg0JmsfytdKuk" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="LLC Formation"
    data-height="638"
    data-layout-iframe-id="inline-alp4aaUEg0JmsfytdKuk"
    data-form-id="alp4aaUEg0JmsfytdKuk"
    data-cookie-consent="true"
    data-cookie-consent-provider="auto"
    title="LLC Formation"
        >
</iframe>
<script src="https://api.kbrownconsultant.com/js/form_embed.js"></script>
```
- **Where it fits:** same as above, in the Formation landing page's "Your Information" section
- **Sent to:** anyone browsing the site, same as Page 1

## Page 3: LLC FormationFull Packet Survey

- **Suggested URL:** `/formation-packet` (unlistednot linked from anywhere public)
- **Purpose:** Phase 3sent manually after payment. Contains the 7-step survey: Service Agreement, Authorization Letter, Personal Info, LLC Details, Services Needed, Documents, Final Signature
- **Embed:** the "LLC Formation Full Packet Survey" iframepaste this exact code:

```html
<iframe src="https://api.kbrownconsultant.com/widget/survey/iESWFff4HD337YstMGJU" style="border:none;width:100%;" scrolling="no" id="iESWFff4HD337YstMGJU" title="survey" data-cookie-consent="true" data-cookie-consent-provider="auto"></iframe>
<script src="https://api.kbrownconsultant.com/js/form_embed.js"></script>
```

Note: unlike the two form iframes above, this survey embed doesn't set a fixed heightGHL's survey widget typically auto-resizes via the `form_embed.js` script. If it renders too short/cut off on your page, you may need to add a `height` style (e.g. `style="border:none;width:100%;min-height:900px;"`) since a 7-step survey is much taller than a single-page form.
- **Page content around it:** keep this page minimala short header ("Complete Your LLC Formation Paperwork") and the survey iframe. No need for marketing copy here since the client is only landing on this page because they already paid and Kevin/you sent them the link directly.
- **Sent to:** only clients who've completed payment on the Formation Basic/Full tierlink goes out manually (or via workflow once you build the automation) after payment confirms

## Page 4: LLC FormationState Selection Guide Survey

- **Suggested URL:** `/formation-state-selection` (unlisted)
- **Purpose:** Phase 3, formation clients onlysent alongside or right after Page 3
- **Embed:** the "LLC Formation State Selection Guide Survey" iframepaste this exact code:

```html
<iframe src="https://api.kbrownconsultant.com/widget/survey/GEwQGPGVStrwj67bJCyg" style="border:none;width:100%;" scrolling="no" id="GEwQGPGVStrwj67bJCyg" title="survey" data-cookie-consent="true" data-cookie-consent-provider="auto"></iframe>
<script src="https://api.kbrownconsultant.com/js/form_embed.js"></script>
```
- **Page content around it:** same minimal treatmentshort header, the survey. This is the one with the state comparison content (Delaware/Wyoming/Nevada/etc.) baked into Step 1 of the survey itself, so the page around it doesn't need to repeat that.
- **Sent to:** same formation clients as Page 3, after payment

## Page 5: LLC DissolutionFull Packet Survey

- **Suggested URL:** `/dissolution-packet` (unlisted)
- **Purpose:** Phase 3sent manually after payment for dissolution clients. Same 7-step structure as Page 3 but for dissolution.
- **Embed:** the "LLC Dissolution Full Packet Survey" iframepaste this exact code:

```html
<iframe src="https://api.kbrownconsultant.com/widget/survey/kHE6KMYc7XNxCWBevaXB" style="border:none;width:100%;" scrolling="no" id="kHE6KMYc7XNxCWBevaXB" title="survey" data-cookie-consent="true" data-cookie-consent-provider="auto"></iframe>
<script src="https://api.kbrownconsultant.com/js/form_embed.js"></script>
```
- **Page content around it:** minimal header + survey, same as Page 3
- **Sent to:** only clients who've completed payment on the Dissolution Basic/Full tier

---

## Quick summary table

| Page | URL (unlisted) | Iframe | Sent to |
|---|---|---|---|
| 1 | `/llc-dissolution-form` | Dissolution Form | Publicvia LLC Services landing page |
| 2 | `/llc-formation-form` | Formation Form | Publicvia LLC Services landing page |
| 3 | `/formation-packet` | Formation Full Packet Survey | Paid formation clients only |
| 4 | `/formation-state-selection` | Formation State Selection Survey | Paid formation clients only |
| 5 | `/dissolution-packet` | Dissolution Full Packet Survey | Paid dissolution clients only |

Pages 1 and 2 are the only two that should be publicly reachable through your site's normal navigation (linked from the LLC Services landing page you already built). Pages 3, 4, and 5 should have **zero public links pointing to them anywhere**that's what makes "unlisted" actually work. If a client bookmarks or shares that link, someone else could open it and submit paperwork without having paid, so once the real automation is built later, the workflow trigger should also cross-check payment status rather than relying on the link being secret as the only gate.

Once these 5 pages are live, we can move to building the payment links per tierthat's the next piece before the break.
