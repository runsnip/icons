/**
 * The rules every RunSnip icon is drawn to.
 *
 * Shared rather than copied, because the whole value of the system is that two
 * sets drawn months apart still look like one set. The moment `SOLID` is
 * spelled out twice, one of them gets an opacity "just for this icon" and the
 * family resemblance is gone.
 *
 * The rules themselves, which every icon file repeats in its own words:
 *
 *   - everything sits inside FIELD — x and y between 3.5 and 20.5 — so no mark
 *     looks larger than another at the same size;
 *   - rectangles, circles and straight lines on that grid, wherever an
 *     abstraction says it better than a picture: not a film reel, not a
 *     camera, not a speaker, not a musical note. The shape of what the thing
 *     DOES is what stays legible at 15px.
 *
 *     This was written as "no drawings of objects" and the set never obeyed
 *     it: there is an envelope, a padlock, a cookie, a monitor, a clock, a
 *     globe, a bin and a pair of scissors in here. Pretending otherwise made
 *     the rule useless — it was quoted to reject a graduation cap for Courses
 *     while the envelope sat two lines below it. So the rule is what the set
 *     actually practises: an object is allowed where the object IS the sign
 *     for the thing, recognised without a caption by everyone. An envelope is
 *     mail. A padlock is locked. A cap is a course. A briefcase is not a
 *     portfolio and a film reel is not video — those are pictures of a
 *     CATEGORY, and an abstraction beats them;
 *   - a wide, squared stance, which is the wordmark's;
 *   - exactly one emphatic motif per mark — filled, or thickened where the
 *     telling part is a line. It is always the part that says which icon this
 *     is. A motif may repeat; two different heavy things may not compete;
 *   - and that motif is the SMALL part. It emphasises the shape that carries
 *     the meaning; it does not become it, and it never covers it. Copy was
 *     drawn twice as an outlined square with a filled square of the same size
 *     on top, and at 15px that is not two sheets — it is a black blob with a
 *     corner sticking out. ClipboardIcon is the pattern: a 15×15 outline with
 *     a 7×4 solid clip.
 *
 * The last one is the only rule here that no script checks, and not for want
 * of trying: measuring "the filled shape must be the smaller one" flags
 * MakeAnimationIcon, where two stills becoming one larger thing IS the
 * meaning, and it still misses two squares of equal size. A check whose
 * exemption list is longer than its findings teaches people to add to the
 * exemption list. So it is checked by looking — `npm run sheet` draws every
 * mark at 40, 24 and 15px for exactly that.
 *
 * Drawn to the defaults in ./render (DEFAULTS), which carry the rest: a 24-unit square, `currentColor`, stroke width 2, round caps and
 * joins. Taking the colour from the surrounding text is what makes one drawing
 * correct on a light ground, a dark ground, selected, and disabled.
 */

/** The emphatic element, where it is an area. */
export const SOLID = { fill: "currentColor", stroke: "none" } as const;

/**
 * The emphatic element, where it is a line.
 *
 * A tick, an arrowhead, the middle bar of a waveform: shapes with no inside to
 * fill. They carry the weight the same way, by being heavier than everything
 * around them, so the one-motif rule still holds.
 */
export const SOLID_STROKE = { "stroke-width": 2.6 } as const;

/**
 * The marks the one-motif rule does not apply to, and why each is exempt.
 *
 * Three kinds, all exempt for the same underlying reason: they are not
 * diagrams of an action, so there is no "part that says which icon this is".
 *
 *   - a LETTER made of two marks. An `i` is a stem and a tittle; a `!` is a
 *     stem and a point. Both parts are filled because the letter is filled,
 *     and counting them as two competing motifs is the check misreading one
 *     glyph as two shapes;
 *   - a KEY's own symbol. ⌘ and ⇧ are characters a keyboard has printed on it,
 *     reproduced so a shortcut is drawn rather than typed. They carry no
 *     emphasis by design: a thickened ⌘ is a ⌘ drawn wrong;
 *   - a BARE SHAPE in outline. An outlined square, star, cloud, shield, play or pause is the
 *     outline of its filled twin and nothing else: there is no small part to
 *     emphasise, and thickening the whole outline would make it the one
 *     outline in the set heavier than every other.
 *
 * An allowlist rather than a flag on the icon, so adding a name to it is a
 * decision somebody makes here, next to the rule it sets aside — and one that
 * shows up in a diff as exactly that.
 */
export const GLYPHS: Record<string, string> = {
  InfoIcon: "the letter i: a stem and its tittle",
  ShieldAlertIcon: "the mark !: a stem and its point",
  CommandKeyIcon: "the ⌘ character, as a keyboard prints it",
  ShiftKeyIcon: "the ⇧ character, as a keyboard prints it",
  SquareOutlineIcon: "a bare shape in outline: SquareIcon's outline",
  StarOutlineIcon: "a bare shape in outline: StarIcon's outline",
  CloudOutlineIcon: "a bare shape in outline: CloudIcon's outline",
  ShieldOutlineIcon: "a bare shape in outline: ShieldIcon's outline",
  PlayOutlineIcon: "a bare shape in outline: PlayIcon's outline",
  PauseOutlineIcon: "a bare shape in outline: PauseIcon's outline",
};

/** The bounds every shape stays inside. Read by the checks, not by the icons. */
export const FIELD = { min: 3.5, max: 20.5 } as const;
