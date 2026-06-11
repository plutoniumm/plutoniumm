<script>
    import { Refs, Meta } from "$cpt";
</script>

<svelte:head>
    <script src="/lt/mermaid.js"></script>
</svelte:head>

<Meta
    title="Elections, Games & Gaming Elections"
    sub="The Mathematics of Voting"
    desc="A look at some mathematics of elections and how they can be gamed"
    date="5 June 2023"
></Meta>

<blockquote>
    <b>Dramatis personae (all fictional):</b> Reasongrad, Analyticaland, Logicia,
    Hawking, Einstein, Newton, Archimedes.
</blockquote>

<p>
    Let us consider the fictitious city of <a
        href="https://neildegrassetyson.com/commentary/2016-08-07-reflections-on-rationalia/"
        target="_blank"
        rel="noopener noreferrer">Rationalia</a
    >, whose sitting president is Dr Neil deGrasse Tyson. Let us then see how to
    hack elections, hack the hacks, and so on. We will also look for better
    election systems altogether. Let us divide this largely into two sections:
    Apportionment and Systems.
</p>

<p>
    Apportionment will be about how to divide the seats between the states,
    rounding and other such things. Systems will be about how to do the voting
    and which process has what merits. Apportionment &amp; Systems can be read
    independently; however, the order inside each section is essential.
</p>

<p>There are a few basic assumptions made here before we move.</p>
<ul>
    <li>
        The countries are democracies, unlike, say, <a
            href="https://en.wikipedia.org/wiki/Politics_of_Saudi_Arabia"
            target="_blank"
            rel="noopener noreferrer">Saudi Arabia</a
        >
        or
        <a
            href="https://en.wikipedia.org/wiki/Politics_of_Iran"
            target="_blank"
            rel="noopener noreferrer">Iran</a
        >, where the people do not have a say in who rules them
    </li>
    <li>
        Elections are GENERALLY free &amp; fair, unlike, say, <a
            href="https://youtu.be/Hkxf4SC_SBk"
            target="_blank"
            rel="noopener noreferrer">Singapore</a
        >
        or
        <a
            href="https://en.wikipedia.org/wiki/Elections_in_China"
            target="_blank"
            rel="noopener noreferrer">China</a
        >
        where the party in power is the only party <b>that can win</b>, and the
        elections are just a formality
    </li>
    <li>
        The countries are stable democracies, unlike, say, <a
            href="https://en.wikipedia.org/wiki/Politics_of_Pakistan"
            target="_blank"
            rel="noopener noreferrer">Pakistan</a
        >
        or
        <a
            href="https://en.wikipedia.org/wiki/Politics_of_Afghanistan"
            target="_blank"
            rel="noopener noreferrer">Afghanistan</a
        >, where the government is overthrown every few years.
    </li>
</ul>

<h2>Apportionment</h2>
<p>
    Let us say Rationalia has two states, Reasongrad and Analyticaland. So let's
    now divide five seats between them across 2 cases, to see how the rounding
    works.
</p>

<table>
    <thead>
        <tr><th>state</th><th>population</th><th>share</th><th>seats</th></tr>
    </thead>
    <tbody>
        <tr><td colspan="4"><b>Case 1</b></td></tr>
        <tr><td>Reasongrad</td><td>2200</td><td>44%</td><td>2 (round down 2.2 seats)</td></tr>
        <tr><td>Analyticaland</td><td>2800</td><td>56%</td><td>3 (round up 2.8 seats)</td></tr>
        <tr><td colspan="4"><b>Case 2</b></td></tr>
        <tr><td>Reasongrad</td><td>2510</td><td>51%</td><td>3 (round up 2.51 seats)</td></tr>
        <tr><td>Analyticaland</td><td>2390</td><td>49%</td><td>2 (round down 2.39 seats)</td></tr>
    </tbody>
</table>

<p>
    However, now, let us add another state, Logicia, but keep the total number
    of seats and the total population the same. Redistributing across the three
    states, we get the following.
</p>

<table>
    <thead>
        <tr><th>state</th><th>population</th><th>share</th><th>seats</th></tr>
    </thead>
    <tbody>
        <tr><td>Reasongrad</td><td>1650</td><td>33%</td><td>2 (round up 1.65 seats)</td></tr>
        <tr><td>Analyticaland</td><td>1600</td><td>32%</td><td>2 (round up 1.6 seats)</td></tr>
        <tr><td>Logicia</td><td>1750</td><td>35%</td><td>2 (round up 1.75 seats)</td></tr>
    </tbody>
</table>

<p>
    However, now suddenly we need six seats when we have only 5. So who do we
    round down?
</p>

<h3>Hamilton's Method</h3>
<p>
    The way this was proposed to be solved is by rounding up from the number
    closest to the next integer, until whoever is left gets rounded down, even
    if they are closer to the next integer themselves. This is called the <a
        href="https://en.wikipedia.org/wiki/Largest_remainder_method"
        target="_blank"
        rel="noopener noreferrer">Hamilton's Method</a
    >. So, in this case, we would round up Reasongrad and Analyticaland and round
    down Logicia. So we get two seats for Reasongrad and Analyticaland and one
    for Logicia. This method is precisely what was also first proposed for
    Alabama in 1792.
</p>

<p>
    So if some state needs 0.3 more seats to round up to 3 (from 2.7), they will
    be rounded up to 3 even if there exists a state with 26.6 seats that needs
    0.4 more seats to round up to 27. This allows for what would be 'fair'
    rounding since a given state is closest to the next integer. The problem
    arises when we add just one more seat. Then which number is closest to the
    next integer jumps around completely randomly. Consider the actual example
    from Alabama below (sorted by descending remaining fraction).
</p>

<p><b>43 seats</b></p>
<table>
    <thead>
        <tr><th>state</th><th>population</th><th>share</th><th>remaining fraction</th></tr>
    </thead>
    <tbody>
        <tr><td>A</td><td>3,252</td><td>3.49</td><td>0.49</td></tr>
        <tr><td>B</td><td>21,878</td><td>23.47</td><td>0.47</td></tr>
        <tr><td>C</td><td>4,167</td><td>4.47</td><td>0.47</td></tr>
        <tr><td>D</td><td>9,731</td><td>10.42</td><td>0.42</td></tr>
        <tr><td>E</td><td>1,065</td><td>1.14</td><td>0.14</td></tr>
    </tbody>
</table>

<p><b>vs 44 seats</b></p>
<table>
    <thead>
        <tr><th>state</th><th>population</th><th>share</th><th>remaining fraction</th></tr>
    </thead>
    <tbody>
        <tr><td>D</td><td>9,731</td><td>10.66</td><td>0.66</td></tr>
        <tr><td>C</td><td>4,167</td><td>4.57</td><td>0.58</td></tr>
        <tr><td>A</td><td>3,252</td><td>3.57</td><td>0.57</td></tr>
        <tr><td>E</td><td>1,065</td><td>1.17</td><td>0.17</td></tr>
        <tr><td>B</td><td>21,878</td><td>24.02</td><td>0.02</td></tr>
    </tbody>
</table>

<p>
    Notice how with these numbers, with just one more seat, while first A and B
    were getting extra seats, now D and C are getting extra seats, and A lost a
    seat. This is a problem because the number of seats is not a continuous
    function of the population. It is a discrete function. So the number of seats
    jumps around semi-randomly. This is called the <a
        href="https://en.wikipedia.org/wiki/Alabama_paradox"
        target="_blank"
        rel="noopener noreferrer">Alabama Paradox</a
    >.
</p>

<p>
    (The method was then vetoed by President Washington, but for a different
    reason altogether; it was a difference in interpreting the law; see the <a
        href="https://en.wikipedia.org/wiki/Apportionment_Act_of_1792"
        target="_blank"
        rel="noopener noreferrer">Apportionment Act of 1792</a
    >.)
</p>

<h3>Jefferson's Method</h3>
<p>Get ready for a whole new level of shitfuckery.</p>

<p>
    Jefferson proposed that the 'divisors' for all states are set to the SAME
    value, such that they all get rounded down first, and the seats are added up.
    The same divisor is then gradually decreased until we reach the required
    number of seats.
</p>

<table>
    <thead>
        <tr><th>state</th><th>population</th><th>portion</th><th>force round down</th><th>reduce to 850</th><th>reduce to 820</th></tr>
    </thead>
    <tbody>
        <tr><td>Reasongrad</td><td>1650</td><td>1650/1000 = 1.65</td><td>1</td><td>1</td><td>2</td></tr>
        <tr><td>Analyticaland</td><td>1600</td><td>1600/1000 = 1.60</td><td>1</td><td>1</td><td>1</td></tr>
        <tr><td>Logicia</td><td>1750</td><td>1750/1000 = 1.75</td><td>1</td><td>2</td><td>2</td></tr>
    </tbody>
</table>

<p>
    This was actually the method they went with from 1792 to 1840. The one
    massive problem here is that, as we decrease the denominator (since it is a
    fraction), larger numbers increase faster. So say 1000/50 = 20 and 1000/40 =
    25, whereas 100/50 = 2 and 100/40 = 2.5; notice how a state with a 1000
    population gained 5 seats, whereas the 100 population state gained only 0.5
    seats, which it may or may not even get. So the larger states get more seats
    faster than the smaller states. This is called the <a
        href="https://en.wikipedia.org/wiki/Jefferson_method"
        target="_blank"
        rel="noopener noreferrer">Jefferson's Method</a
    >.
</p>

<h3>Adam &amp; Webster Methods</h3>
<p>
    Adam's method is exactly the same as Jefferson's method, except rather than
    force round down and then slowly decrease the denominator, we force round UP
    and slowly increase the denominator. This is called the <a
        href="https://en.wikipedia.org/wiki/Adam%27s_method"
        target="_blank"
        rel="noopener noreferrer">Adam's Method</a
    >. The Jefferson method favours the larger states, and Adam's method favours
    the smaller states (for the same reason, since large numbers move
    faster, the larger states also lose seats faster).
</p>

<p>
    Webster's method is again the same as Adam's &amp; Jefferson's, except rather
    than force round up or down, we round to the nearest integer like a normal
    human. This is called the <a
        href="https://en.wikipedia.org/wiki/Webster%27s_method"
        target="_blank"
        rel="noopener noreferrer">Webster's Method</a
    >.
</p>

<h3>Violating Rules</h3>
<p>
    Consider the following data, graciously generated by Mr Matt Parker.
</p>

<p class="tc o-50" style="font-size: 0.85em">
    43 seats &bullet; D = 931.9767 &bullet; Jefferson divisor = 880 &bullet; Adams
    divisor = 1000
</p>

<table>
    <thead>
        <tr>
            <th>state</th>
            <th>population</th>
            <th>quota (=pop/D)</th>
            <th>Jefferson (=pop/880)</th>
            <th>seats</th>
            <th>Adams (=pop/1000)</th>
            <th>seats</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>New Triangle</td><td>21,878</td><td>23.47483</td><td>24.8614</td><td>24</td><td>21.878</td><td>22</td></tr>
        <tr><td>Circula</td><td>9,713</td><td>10.42193</td><td>11.0375</td><td>11</td><td>9.713</td><td>10</td></tr>
        <tr><td>Squaryland</td><td>4,167</td><td>4.471142</td><td>4.73523</td><td>4</td><td>4.167</td><td>5</td></tr>
        <tr><td>Octiana</td><td>3,252</td><td>3.489357</td><td>3.69545</td><td>3</td><td>3.252</td><td>4</td></tr>
        <tr><td>Rhombus Island</td><td>1,065</td><td>1.142732</td><td>1.21023</td><td>1</td><td>1.065</td><td>2</td></tr>
        <tr><td><b>Total</b></td><td><b>40,075</b></td><td></td><td></td><td><b>43</b></td><td></td><td><b>43</b></td></tr>
    </tbody>
</table>

<p>
    Notice how, in the data above, New Triangle jumped from 23.47 down to 22,
    skipping 23 entirely, which should technically not be allowed, since
    rounding can happen only up or down to the next or previous number. Jumping numbers is not allowed in the <a
        href="https://en.wikipedia.org/wiki/Quota_rule"
        target="_blank"
        rel="noopener noreferrer">Quota Rule</a
    >. This was a common occurrence in both Jefferson's and Adam's methods. The
    reason why this was allowed to stay for so long was because the Jefferson
    Rule favoured big states. And guess who had more power (more votes)? Big
    states -_-.
</p>

<p>
    They later went to Hamilton's method in 1840, till 1880, when someone
    rediscovered the Alabama Paradox. So then, if it looks like it is impossible
    to avoid either the Violation of the Quota Rule or the Alabama Paradox, what
    do we use?
</p>

<h3>Huntington-Hill Method</h3>
<p>
    This is too complex to explain. It is just one big clusterfuck. There is a
    geometric mean, a square root, and an ambiguous definition involved somewhere.
    The general idea is that this, too, has Quota Rule Violations. Hill also
    stays because it technically, by default, favours the smaller states, which
    is a political decision and not a mathematical one.
</p>

<xxx />

<h2>Electoral Systems</h2>
<p>
    Before discussing strategies, we assume one thing throughout: each citizen
    has exactly one vote, under any circumstance.
</p>

<h3>Winner Takes All</h3>
<p>
    A system where 'the most votes' wins. Let us consider 5 cities: Logicia,
    Analyticaland, Reasongrad, Sensibilia, and Flatland (Cameo).
</p>

<table>
    <thead>
        <tr><th>City</th><th>Got Votes</th></tr>
    </thead>
    <tbody>
        <tr><td>Logicia</td><td>20%</td></tr>
        <tr><td>Analyticaland</td><td>18%</td></tr>
        <tr><td>Reasongrad</td><td>22%</td></tr>
        <tr><td>Sensibilia</td><td>21%</td></tr>
        <tr><td>Flatland</td><td>19%</td></tr>
    </tbody>
</table>

<p>
    We can clearly see here how Reasongrad, with the most votes, won this
    election, but they elected a leader whom, in fact, 78% of people did not want.
    So this is technically a minority-rule system, since none of the cities has a
    majority. So we have effectively been unfair to 78% of the population. We
    can see how this system gets worse when there are more and more cities. If
    there were 20 candidates, then someone with only 6% of the votes could win
    simply because of the most votes despite being only favoured by 6% of the
    population.
</p>

<p>
    This method, unfortunately, also forces a two-party system. In every
    election, smaller parties see their abysmal results, and eventually the voters
    decide to go with the candidate they LEAST DISAGREE with, in an endless cycle
    that continues until there are only two candidates left. Given enough time,
    all <a
        href="https://en.wikipedia.org/wiki/First-past-the-post_voting"
        target="_blank"
        rel="noopener noreferrer">First Past the Post</a
    > systems will eventually become two-party systems. This is often called the
    <a
        href="https://en.wikipedia.org/wiki/Duverger%27s_law"
        target="_blank"
        rel="noopener noreferrer">Duverger's Law</a
    >. This has been clearly seen in several countries like the US, UK, India,
    Canada, Australia, etc. There do, however, exist some rare exceptions like
    the Philippines, where since 1987, no party has been able to control the
    House of Representatives.
</p>

<p>
    This eventually has another problem where the majority of the voter base who
    did not originally want the now 2 majority parties eventually become
    disinterested in the political process and stop voting in what is often
    termed <a
        href="https://en.wikipedia.org/wiki/Voter_apathy"
        target="_blank"
        rel="noopener noreferrer">Voter Apathy</a
    > where the voters stop wanting to vote because they feel their vote does not
    matter or does not meaningfully express who they want as a candidate.
</p>

<h4>Gerrymandering</h4>
<p>
    Gerrymandering is the process of redrawing the borders of a state to favour a
    particular party. This is often done by the party in power to ensure they
    stay in power. This is often done by splitting the opposition party's voter
    base into multiple districts so that they have a majority in all districts
    but not a majority in any one district. This is often called <a
        href="https://en.wikipedia.org/wiki/Gerrymandering"
        target="_blank"
        rel="noopener noreferrer">Cracking</a
    >
    &amp;
    <a
        href="https://en.wikipedia.org/wiki/Gerrymandering"
        target="_blank"
        rel="noopener noreferrer">Packing</a
    >.
</p>

<p>
    Consider the following example. Let us say Newton, Einstein, and Hawking are
    3 candidates, and there are 3 voters who want Newton, 3 who want Einstein, and
    4 who want Hawking. Now if we split the district voters in the following 2
    ways:
</p>

<ul>
    <li>Constituency 1: Newton, Newton, Newton, Hawking, Hawking</li>
    <li>Constituency 2: Einstein, Einstein, Einstein, Hawking, Hawking</li>
</ul>

<p>
    We can now see how Newton and Einstein have a majority in both constituencies
    despite each having fewer votes overall than Hawking; in the end, Hawking's
    voters would have been eliminated completely. Gerrymandering gives whoever
    draws the lines an unfair advantage.
</p>

<h4>The Spoiler Effect</h4>
<p>
    The Spoiler Effect is when a third-party candidate takes votes away from a
    major party candidate, causing a loss. This is often used as an argument
    against third parties. So rather than helping us choose more candidates, it
    becomes a way to play more politics. So if Einstein pays Hawking to stand in
    an election on a platform SIMILAR to, but not the same as, Newton's, some of
    Newton's voters will now vote for Hawking, thus taking away some of Newton's
    chance of winning. This is often called the <a
        href="https://en.wikipedia.org/wiki/Spoiler_effect"
        target="_blank"
        rel="noopener noreferrer">Spoiler Effect</a
    >.
</p>

<p>So far now, we need 4 things to make a better system</p>
<ul>
    <li>We should be able to vote for who we want</li>
    <li>No Gerrymandering</li>
    <li>More parties are better</li>
    <li>And it should be open to newcomers (IMPORTANT)</li>
</ul>

<h3>Instant Runoff Voting</h3>
<p>
    Rather than voting for one candidate, we rank them in this system. Let's say
    we have five candidates, A, B, C, D, E. We can rank them in the order we
    want. So if I want to see B in power, I put B first, then whoever I would
    next prefer, say A, and so on.
</p>

<p>Consider the following ratios:</p>

<table>
    <thead>
        <tr><th>candidate</th><th>share</th></tr>
    </thead>
    <tbody>
        <tr><td>Newton</td><td><code>████░░░░░░</code> 42%</td></tr>
        <tr><td>Einstein</td><td><code>███░░░░░░░</code> 26%</td></tr>
        <tr><td>Hawking</td><td><code>██░░░░░░░░</code> 17%</td></tr>
        <tr><td>Archimedes</td><td><code>██░░░░░░░░</code> 15%</td></tr>
    </tbody>
</table>

<p>
    So now, we eliminate the last candidate, Archimedes. We take all the votes
    that went to Archimedes and see who they voted for next; let us say ALL of
    those who voted for Archimedes voted for Hawking next, making the new
    results:
</p>

<table>
    <thead>
        <tr><th>candidate</th><th>share</th></tr>
    </thead>
    <tbody>
        <tr><td>Newton</td><td><code>████░░░░░░</code> 42%</td></tr>
        <tr><td>Einstein</td><td><code>███░░░░░░░</code> 26%</td></tr>
        <tr><td>Hawking</td><td><code>███░░░░░░░</code> 32%</td></tr>
    </tbody>
</table>

<p>
    Now we eliminate Einstein and see who they voted for next; let us say ALL of
    those who voted for Einstein voted for Hawking next, making the new
    results:
</p>

<table>
    <thead>
        <tr><th>candidate</th><th>share</th></tr>
    </thead>
    <tbody>
        <tr><td>Newton</td><td><code>████░░░░░░</code> 42%</td></tr>
        <tr><td>Hawking</td><td><code>██████░░░░</code> 58%</td></tr>
    </tbody>
</table>

<p>
    This gives us the final winner, Hawking. This is called the <a
        href="https://en.wikipedia.org/wiki/Instant-runoff_voting"
        target="_blank"
        rel="noopener noreferrer">Instant Runoff Voting</a
    > system.
</p>

<p>
    So far, this method solves one key issue for us: it is very open to new
    parties, and the spoiler effect cannot affect the results as much. Since now,
    if there are two candidates and a third party candidate comes in, the third
    party candidate will still take some votes from whoever they're paid to take
    it away from. But now that the third party candidate is eliminated, the votes
    will go to whoever the voters wanted next. Now, the votes just go back to
    whoever they were taken from in the first place.
</p>

<p>
    Despite solving one issue, this method still inherits problems from the
    Winner Takes All system, such as gerrymandering. It also has an oddity of its
    own: despite having started 3rd in the first round, Hawking still won the
    election, and it doesn't seem fair for a 3rd-place candidate to win. So we
    need a system that solves this issue.
</p>

<h3>Multiple Runoff</h3>
<p>
    This system is similar to the Instant Runoff Voting system, but rather than
    eliminating the last candidate immediately and just recalculating the votes,
    we have multiple rounds of voting. So we have the first round, we vote again
    with three candidates, then with two candidates. Or we can have a system
    similar to Brazil where we have two rounds of voting (assuming there is no
    clear &gt;50% in one shot); the first round is similar to the Instant Runoff
    Voting system. The second round is a Winner Takes All system. This is called
    the <a
        href="https://en.wikipedia.org/wiki/Two-round_system"
        target="_blank"
        rel="noopener noreferrer">Multiple Runoff</a
    > system.
</p>

<p>
    Consider a multiple-run system where Hawking wants to skew the results even
    though they know they cannot win themselves. Hawking would rather Archimedes
    win than Einstein, so they have all their voters back Archimedes in the first
    round, leaving Einstein at the bottom. This gives us:
</p>

<table>
    <thead>
        <tr><th>candidate</th><th>share</th></tr>
    </thead>
    <tbody>
        <tr><td>Newton</td><td><code>████░░░░░░</code> 42%</td></tr>
        <tr><td>Einstein</td><td><code>███░░░░░░░</code> 26%</td></tr>
        <tr><td>Archimedes</td><td><code>███░░░░░░░</code> 32%</td></tr>
    </tbody>
</table>

<p>
    Notice how, in this situation, Einstein is now the lowest and immediately
    gets eliminated. So, as before, all of Einstein's votes go to Archimedes,
    giving us:
</p>

<table>
    <thead>
        <tr><th>candidate</th><th>share</th></tr>
    </thead>
    <tbody>
        <tr><td>Newton</td><td><code>████░░░░░░</code> 42%</td></tr>
        <tr><td>Archimedes</td><td><code>██████░░░░</code> 58%</td></tr>
    </tbody>
</table>

<p>
    So here, despite not winning, Hawking has skewed the results to make sure
    Einstein doesn't win AND that Archimedes, the candidate they most agree
    with, does. And they pulled this off despite starting 3rd, with only 17% of
    the vote and no path to winning. This suddenly went from slightly unfair to
    complete anarchy. A method which incentivises people to lie shouldn't be a
    candidate for an 'ideal' system. So we need a system that solves this issue.
</p>

<h3>Condorcet Method</h3>
<p>
    What if we were to have a system where we could vote for every possible
    matchup of candidates? So if we have 4 candidates, we vote for each of the
    following cases:
</p>

<ul>
    <li>A vs B, A vs C, A vs D</li>
    <li>B vs C, B vs D</li>
    <li>C vs D</li>
</ul>

<p>
    So if we have four candidates, we have 6 possible matchups. So let us take a
    sample game where the following are the preferences expressed by people in
    each matchup.
</p>

<table>
    <thead>
        <tr><th colspan="2">A vs B</th><th colspan="2">C vs A</th><th colspan="2">A vs D</th></tr>
    </thead>
    <tbody>
        <tr><td>A</td><td><code>███████░░░</code> 68%</td><td>C</td><td><code>████░░░░░░</code> 42%</td><td>A</td><td><code>███████░░░</code> 68%</td></tr>
        <tr><td>B</td><td><code>███░░░░░░░</code> 32%</td><td>A</td><td><code>██████░░░░</code> 58%</td><td>D</td><td><code>███░░░░░░░</code> 32%</td></tr>
    </tbody>
</table>

<table>
    <thead>
        <tr><th colspan="2">C vs B</th><th colspan="2">C vs D</th><th colspan="2">B vs D</th></tr>
    </thead>
    <tbody>
        <tr><td>C</td><td><code>████░░░░░░</code> 42%</td><td>C</td><td><code>████░░░░░░</code> 42%</td><td>B</td><td><code>██░░░░░░░░</code> 17%</td></tr>
        <tr><td>B</td><td><code>██████░░░░</code> 58%</td><td>D</td><td><code>██████░░░░</code> 58%</td><td>D</td><td><code>████████░░</code> 83%</td></tr>
    </tbody>
</table>

<p>
    Notice that in such a method, we see that A is the most preferred candidate
    since A has the highest percentage in 3 of the 6 matchups. So we can say that
    A is the winner. This is called the <a
        href="https://en.wikipedia.org/wiki/Condorcet_method"
        target="_blank"
        rel="noopener noreferrer">Condorcet Method</a
    >. There is, however, one BIG problem with this method. WHAT IF, let us say,
    we had 3 candidates and the results came out like a game of
    stone-paper-scissors, such that
</p>

<lt-mmd>{`graph LR
  A --> B
  B --> C
  C --> A`}</lt-mmd>

<p>
    In such a case, A is preferred over B, B is preferred over C, and C is
    preferred over A, so there is no clear winner. This is called a <a
        href="https://en.wikipedia.org/wiki/Condorcet_paradox"
        target="_blank"
        rel="noopener noreferrer">Condorcet Paradox</a
    >. This situation may occur for any number of candidates, and candidates may
    even game the system to form loops. So, for example, both of the following
    cases are a problem
</p>

<lt-mmd>{`graph LR
  X["Loop"]
  A --- B
  A --- C
  C --> D["..."]
  B --- D`}</lt-mmd>

<lt-mmd>{`graph LR
  X --> Y
  Y --> A
  subgraph Loop
    direction TB
    A --> B
    B --> C
    C --> A
  end`}</lt-mmd>

<h3>Single Transferable Vote</h3>
<p>
    Also called "The Single Greatest Voting System To Have Ever Existed" (by at
    least 1 person). This is a system where you rank candidates in order of
    preference. Our objectives here are
</p>

<ul>
    <li>Majority Happiness</li>
    <li>Local Elections (not just one national)</li>
    <li>Allow multiple representatives</li>
</ul>

<p>
    There is no way I can explain this without an animation, so just follow this
    video below.
</p>

<p>
    <a
        href="https://www.youtube.com/watch?v=M91jraoo6t8"
        target="_blank"
        rel="noopener noreferrer">Watch the Single Transferable Vote explainer video</a
    >
</p>

<xxx />

<h2>Conclusions &amp; Caveats</h2>
<h3>Possibilities</h3>
<p>
    It is, in theory, mathematically possible to show that for any system, there
    are some criteria that a reasonable human would include in the idea of
    'fairness' that gets left out (<a
        href="https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem"
        target="_blank"
        rel="noopener noreferrer">Arrow's Impossibility Theorem</a
    >).
</p>

<ul>
    <li>
        <a
            href="https://en.wikipedia.org/wiki/Pareto_efficiency"
            target="_blank"
            rel="noopener noreferrer">Mutual Majority</a
        >
    </li>
    <li>
        <a
            href="https://en.wikipedia.org/wiki/Dictatorship_mechanism"
            target="_blank"
            rel="noopener noreferrer">Non-Dictatorship</a
        >
    </li>
    <li>
        <a
            href="https://en.wikipedia.org/wiki/Condorcet_winner_criterion"
            target="_blank"
            rel="noopener noreferrer">Condorcet Criterion</a
        >
    </li>
    <li>
        <a
            href="https://en.wikipedia.org/wiki/Independence_of_irrelevant_alternatives#In_social_choice"
            target="_blank"
            rel="noopener noreferrer">Independence of Irrelevant Alternatives</a
        >
    </li>
    <li>
        <a
            href="https://en.wikipedia.org/wiki/Monotonicity_criterion"
            target="_blank"
            rel="noopener noreferrer">Monotonicity</a
        >
    </li>
    <li>
        And others; see the technical statement of Arrow's Impossibility
        Theorem for more details.
    </li>
</ul>

<p>
    A more straightforward way to say this would be with the results of <a
        href="https://en.wikipedia.org/wiki/Gibbard%27s_theorem"
        target="_blank"
        rel="noopener noreferrer">Gibbard's Theorem</a
    > (which is a consequence of Arrow's Theorem), which states that for any
    process of collective decision, one of the following MUST hold:
</p>

<ul>
    <li>The process is dictatorial</li>
    <li>The process is susceptible to tactical voting</li>
    <li>The process limits the possible outcomes to TWO options only</li>
</ul>

<h3>Comparisons</h3>
<p>
    Of all the systems we have seen, each has its advantages and disadvantages.
    So usually, when selecting a political system, it is not a matter of what's
    best but what is least bad. So, say, in a large democracy like India, it may
    not even be feasible to do Multiple Runoff in the first place, or it may not
    be fair to do something else somewhere else, and we know there are
    inevitably going to be SOME problems.
</p>

<p>
    <a
        href="https://en.wikipedia.org/wiki/List_of_electoral_systems_by_country#Maps"
        target="_blank"
        rel="noopener noreferrer">Here</a
    > are some electoral systems countries use worldwide. You can see that no one
    system is used by all countries. Some countries use multiple systems for
    different elections. For example, in India, the Lok Sabha elections use First
    Past The Post while the Rajya Sabha elections use Single Transferable Vote.
    There are also some countries that use multiple systems for the same
    election.
</p>

<h3>Caveats</h3>
<p>There is also SOME influence from how each system itself is implemented.</p>

<p>
    Take whether or not voting is compulsory. There are four types of system:
</p>
<ul>
    <li>Enforced Compulsory Voting: Ex. Australia, Brazil etc</li>
    <li>Non-Enforced Compulsory Voting: Ex. Turkey, Belgium etc</li>
    <li>Partially Compulsory Voting (men only): Ex. Egypt, Libya etc</li>
    <li>Voluntary Voting: Ex. India, USA etc</li>
</ul>

<p>
    Or whether or not reservations exist, the most significant example by far
    would be India, where minorities and reserved castes have a substantial
    influence on the outcome of the election. This is often such a deal breaker
    that parties tend to get commonly accused of <a
        href="https://en.wikipedia.org/wiki/Votebank"
        target="_blank"
        rel="noopener noreferrer">'Vote Bank Politics'</a
    >
    or
    <a
        href="https://en.wikipedia.org/wiki/Pseudo-secularism"
        target="_blank"
        rel="noopener noreferrer">'Minority Appeasement'</a
    > where they try to appease a certain group of people to get their votes.
    There are also other countries like Morocco where the reservations are not
    only by caste or gender but also by age, they have 30 reserved seats for <a
        href="https://en.wikipedia.org/wiki/Parliament_of_Morocco"
        target="_blank"
        rel="noopener noreferrer">people under 40</a
    >, and it is well known that younger people generally lean further left than
    older people, and they <a
        href="https://www.jstor.org/stable/1041104"
        target="_blank"
        rel="noopener noreferrer">gradually become more conservative</a
    > as they age.
</p>

<p>
    So a few things occasionally done in some systems are gerrymandering around
    the voting likelihood of a region or demographic: say, if voting is
    compulsory for men and a region favours you, then skew for that; or if women
    dislike your party, then split up regions where women tend to vote in high
    numbers.
    While these things generally make a difference, I decided not to go into too
    much detail since they can be deduced as a particular case of the systems we
    have already seen.
</p>

<p>
    There has also been no mention of strategies political parties use to target
    certain demographics; the fact that this is done is implicit in the ways to
    game any system.
</p>

<Refs
    list={[
        [
            "Single Transferable Vote: explainer video",
            "https://www.youtube.com/watch?v=M91jraoo6t8",
        ],
    ]}
></Refs>

<style>
    a {
        color: #2af;
    }
    blockquote {
        margin: 1em 0;
        padding: 0.5em 1em;
        border-left: 3px solid #2af;
        background: #2af1;
    }
    table {
        border-collapse: collapse;
        width: 100%;
        margin: 1.5em 0;
        font-size: 0.95em;
    }
    th,
    td {
        border: 1px solid #aaa6;
        padding: 4px 10px;
        text-align: left;
    }
    th {
        background: #0001;
    }
    code {
        font-family: monospace;
        letter-spacing: -1px;
    }
    lt-mmd {
        display: block;
        text-align: center;
        margin: 1.5em auto;
    }
</style>
