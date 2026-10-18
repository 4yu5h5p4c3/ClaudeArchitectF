const quizSet2 = [
  {
    num: 1,
    kind: "single",
    q: "Users frequently send ambiguous requests like \"book a venue for the party\" without specifying date, guest count, or budget. Your evaluation shows the assistant asks an average of 4 questions before taking any action, causing 35% of users to abandon mid-conversation, However, when you reduce questions, users sometimes receive recommendations that don't preferences. What's the most effective approach to improve this trade-off?",
    options: {
      A: "Implement a structured intake form that collects all required parameters (date, guest count, budget, venue type) upfront before the assistant begins providing any recommendation",
      B: "Configure the assistant to proceed with reasonable defaults (medium sized venue, next weekend, moderate budget) without explicitly stating these assumptions, allowing users to corrections if results don't match expectations",
      C: "Instruct the assistant to state explicit assumptions based on conversation status proceed with recommendations while inviting corrections, and reserve clarifying questions only Irreversible actions like confirming bookings.",
      D: "Configure the assistant to consolidate all clarifying questions into a single compound question (e.g., \"What date, guest count, and budget are you considering?\") to reduce the total"
    },
    answer: ["C"],
    explanation: "Stating explicit assumptions and proceeding with recommendations while inviting corrections balances usability with accuracy and minimizes unnecessary questions."
  },
  {
    num: 2,
    kind: "single",
    q: "During QA testing, you notice that Claude follows your system prompt guidelines consistently in the first 10-15 turns, but by turn 25-30, responses begin deviating-using informal tone when formality was specified, occasionally skipping required formatting, or providing information types the guidelines restrict. Conversation length is well within context limits (typically 30,000 tokens out of 200,000 available). What's the most effective approach to maintain consistent behavior throughout extended conversations?",
    options: {
      A: "Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests.",
      B: "Implement post-response validation that regenerates each response until it conforms to the specified guidelines.",
      C: "Automatically start a new conversation after 20 turns, passing a summary of the prior context to maintain continuity",
      D: "Move behavioral guidelines from the system prompt into the first user message."
    },
    answer: ["A"],
    explanation: "This combats instruction drift by periodically refreshing key constraints within the active context, keeping behavior aligned over long conversations."
  },
  {
    num: 3,
    kind: "single",
    q: "Performance analysis reveals your context is composed of accumulated RAG results from all previous queries, which is crowding out conversation history and causing coherence degradation after 15 turns Which approach best addresses this issue?",
    options: {
      A: "Implement semantic deduplication to identify and remove redundant information across the accumulated RAG results and conversation turns",
      B: "Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history",
      C: "Shift context budget to favor RAG results while reducing conversation history allocation",
      D: "Compress all RAG results into a consolidated summary document that updates incrementally after each retrieval"
    },
    answer: ["B"],
    explanation: "It directly addresses context crowding by limiting RAG growth while keeping conversation continuity intact."
  },
  {
    num: 4,
    kind: "single",
    q: "Your music discovery assistant should consistently maintain an enthusiastic tone, explain its reasoning for each recommendation, and ask clarifying questions to better understand user preferences. You want this behavior to persist reliably across all user interactions. Where should you define these behavioral guidelines?",
    options: {
      A: "In the first assistant message, instructing Claude to follow these guidelines going forward",
      B: "Prepended to each user message before sending to the API",
      C: "In the system prompt",
      D: "In environmental variables that your application passes to the API client"
    },
    answer: ["C"],
    explanation: "The system prompt is the highest-priority instruction layer, making it the most reliable place to enforce consistent tone, reasoning style, and questioning behavior."
  },
  {
    num: 5,
    kind: "single",
    q: "During a conversation about order tracking, your external system receives a webhook indicating the user's package has shipped. The user is actively chatting and will likely send a follow-up message soon. You want the assistant to naturally incorporate this status change in its next response. What's the most effective approach?",
    options: {
      A: "Immediately send an API request with the update as a synthetic user message, generating an unsolicited assistant response.",
      B: "Append the status update as a prefix to the next user message before calling the API",
      C: "Configure the assistant to call a get order status tool at the start of every response",
      D: "Add the current shipping status to the system prompt before the next API call"
    },
    answer: ["D"],
    explanation: "This cleanly injects up-to-date system state into context, allowing the assistant to naturally incorporate it into the next response without disrupting the conversation flow."
  },
  {
    num: 6,
    kind: "single",
    q: "A new user's first message is \"Set up my focus music,\" This could mean configure preferences, create a playlist, or play music immediately. Your system supports all three actions. What's the effective approach?",
    options: {
      A: "Create a new \"Focus\" playlist with curated tracks and notify the user it's ready.",
      B: "Ask one clarifying question about action type, play now or configure for later",
      C: "Play popular focus tracks immediately and let the user redirect if needed",
      D: "Start preference configuration by asking about genres, temps, and artists they prefer for focus"
    },
    answer: ["B"],
    explanation: "This minimizes friction while resolving ambiguity, enabling the assistant to take the right action quickly."
  },
  {
    num: 7,
    kind: "single",
    q: "Users report that responses feel repetitive across turns-each message begins with phrases like \"Certainly\" or \"I'd be happy to help!\" even deep into conversations. You want responses to feel more natural, without these repetitive openers. What's the most effective approach?",
    options: {
      A: "Implement post-processing to detect and strip common greeting phrases from response beginnings",
      B: "Add system prompt instructions specifying phrases to avoid, such as \"Never begin responses with Certainly or similar affirmations\"",
      C: "Lower the temperature parameter to make response openings more deterministic and less variable",
      D: "Append a partial assistant message with a direct response opening that the model will continue from"
    },
    answer: ["D"],
    explanation: "Pre-filing or response steering forces the model to continue from a specific opening, bypassing its internal politeness training or RLHF-induced habit of starting every turn with a greeting."
  },
  {
    num: 8,
    kind: "single",
    q: "Users frequently send ambiguous requests like \"book a venue for the party without specifying date, guest count, or budget.\" Your evaluation shows the assistant asks an average of 4 questions before taking any action, causing 35% of users to abandon mid-conversation. However, when you reduce questions, users sometimes receive recommendations that don't preferences. What's the most effective approach to improve this trade-off?",
    options: {
      A: "Implement a structured intake form that collects all required parameters (date, guest count, budget, venue type) upfront before the assistant begins providing any recommendation",
      B: "Configure the assistant to proceed with reasonable defaults (medium sized venue, next weekend, moderate budget) without explicitly stating these assumptions, allowing users to corrections if results don't match expectations",
      C: "Instruct the assistant to state explicit assumptions based on conversation status proceed with recommendations while inviting corrections, and reserve clarifying questions only irreversible actions like confirming bookings",
      D: "Configure the assistant to consolidate all clarifying questions into a single compound question (e.g., \"What date, guest count, and budget are you considering?\") to reduce the total"
    },
    answer: ["C"],
    explanation: "Stating explicit assumptions and proceeding with recommendations while inviting corrections balances usability with accuracy."
  },
  {
    num: 9,
    kind: "single",
    q: "Your process refund tool returns two types of errors: technical errors (\"503 Service Unavailable\", \"Connection timeout\") that are transient (5% of calls), and business errors (\"Order exceeds 3 day return window\", \"item already refunded\") that are permanent (12% of calls). Monitoring shows the agent wastes 3-4 turns retrying business errors that can never succeed. Currently, both error types return only a plain text message to Claude. What's the most effective way to reduce wasted retries while improving customer-facing response quality?",
    options: {
      A: "Add few-shot examples showing how to distinguish retriable from non-retriable errors by parsing error message text,",
      B: "Add a check refund eligibility tool that must be called before process refund to prevent business rule violations.",
      C: "Implement automatic retry logic at the tool level for technical errors only, passing business errors to Claude without retries",
      D: "Return structured error responses with retryable false for business errors and a customer-friendly explanation for Claude to use."
    },
    answer: ["D"],
    explanation: "Returning structured error responses gives explicit flags and clear explanations, preventing incorrect retries while empowering the agent to respond appropriately."
  },
  {
    num: 10,
    kind: "single",
    q: "Your agent has called lookup_order multiple times while investigating a customer's return requests. Each response includes 40+ fields (items, shipping details, payment info). These tool outputs now represent the majority of the conversation's context. The customer mentions two more orders they want to discuss. What's the most effective approach before additional lookups?",
    options: {
      A: "Move all tool responses to a vector database with semantic indexing, retrieving relevant portions as the conversation continues",
      B: "Extract only return-relevant fields (items, purchase date, return window, status) from each existing order response, removing verbose details",
      C: "Have the model generate a natural language summary of each order's key details, replacing structured responses with prose descriptions",
      D: "Proceed with additional lookups without modifying the existing tool output context"
    },
    answer: ["B"],
    explanation: "Extracting only essential return-relevant fields preserves necessary information while significantly reducing context bloat."
  },
  {
    num: 11,
    kind: "single",
    q: "During a billing dispute resolution, your agent successfully retrieves customer info via get_customer and order details via lookup_order, but when attempting to call process_refund, the tool returns a timeout error. The agent has enough information to explain the charges and verify refund eligibility, but cannot actually process the refund due to the backend failure. What approach best balances first-contact resolution with appropriate error handling?",
    options: {
      A: "Confirm the refund will be processed and close the conversation, since the system has all necessary information to complete it automatically",
      B: "Explain the billing, confirm refund eligibility, acknowledge the system issue preventing immediate processing, and offer escalation or retry later",
      C: "Escalate immediately to a human agent since the refund action cannot be completed",
      D: "Implement automatic retries with exponential backoff for process_refund, keeping the conversation open until the refund is successfully processed"
    },
    answer: ["B"],
    explanation: "Maximizes first-contact value by resolving what can be resolved while transparently handling the backend failure."
  },
  {
    num: 12,
    kind: "single",
    q: "Your agent is handling a billing dispute. After calling get_customer and lookup_order, it identifies that the dispute involves a promotional pricing error requiring manager approval-beyond the agent's authorization level. How should the workflow handle this mid-process escalation?",
    options: {
      A: "Persist the complete conversation and tool response history to a database, then call escalate_to_human with a reference ID",
      B: "Call escalate_to_human passing only the customer's original message.",
      C: "Attempt the refund with process_refund anyway, escalating only if the system rejects the transaction",
      D: "Compile a structured handoff with customer details, order info, and the identified issue before calling escalate_to_human"
    },
    answer: ["D"],
    explanation: "A structured handoff preserves context, reduces repetition, and enables efficient continuation by the human agent."
  },
  {
    num: 13,
    kind: "single",
    q: "Production logs reveal inconsistent error handling: when lookup_order fails, the agent sometimes retries 5+ times, sometimes escalates immediately, and sometimes asks users for clarification. Investigation shows your MCP tool returns uniform error responses: `{\"isError\": true, \"content\": [{\"type\": \"text\", \"text\": \"Operation failed\"}]}`. The agent cannot distinguish between error types. What's the most effective improvement?",
    options: {
      A: "Enhance error responses with structured metadata: include errorCategory (transient/validation/permission), isRetryable boolean, and a description of what caused the failure.",
      B: "Implement retry logic with exponential backoff in your MCP server for all errors, returning to the agent only after retries are exhausted",
      C: "Add few-shot examples to the system prompt demonstrating how to interpret error message patterns and select appropriate responses for each.",
      D: "Create an analyze_error MCP tool the agent calls after any failure to determine the error category and recommended action"
    },
    answer: ["A"],
    explanation: "Structured error metadata gives the agent clear signals for deciding whether to retry, escalate, or ask the user for clarification."
  },
  {
    num: 14,
    kind: "single",
    q: "A customer raises three separate issues during one session: a refund inquiry (turns 1-15), a subscription question (turns 16-30), and a payment method update (turns 31-45). At turn 48, the customer asks \"What happened with my refund?\" The conversation is approaching context limits. What strategy best maintains the agent's ability to address all issues throughout the session?",
    options: {
      A: "Implement sliding window context that retains the most recent 30 turns.",
      B: "Extract and persist structured issue data (order IDs, amounts, statuses) into a separate context layer.",
      C: "Rely on MCP tools to re-fetch relevant information on demand when the customer references earlier issues",
      D: "Summarize earlier turns into a narrative description, preserving full message history only for the active issue."
    },
    answer: ["B"],
    explanation: "Structured persistence preserves critical state across multiple concurrent issues while minimizing context usage and enabling reliable recall."
  },
  {
    num: 15,
    kind: "single",
    q: "Your update_user_profile tool accepts a user_id (required) and an optional fields_to_update object. In testing, Claude frequently omits user_id or passes incorrectly structured data. What is most critical for helping Claude understand what parameter values to provide?",
    options: {
      A: "Clear parameter descriptions explaining expected format, such as \"user_id: UUID of the user to update (required)\"",
      B: "Verbose parameter names encoding format hints, such as user_id_string_uuid_format",
      C: "Strict JSON Schema type constraints marking user_id as required and defining fields_to_update as an object type",
      D: "Detailed error responses explaining why invalid parameter values were rejected"
    },
    answer: ["A"],
    explanation: "Clear, human-readable descriptions are the most important guidance for helping Claude understand parameter values and structures."
  },
  {
    num: 16,
    kind: "single",
    q: "Production monitoring shows your search_catalog tool fails 12% of the time: 8% are network timeouts that succeed when immediately retried, while 4% are query syntax errors from malformed user-provided filters that never succeed regardless of retry attempts. Currently, both error types are returned identically, causing it to waste turns retrying syntax errors and telling users to try again later for timeouts. How should you modify the tool's error handling?",
    options: {
      A: "Apply exponential backoff retry logic to all errors uniformly, returning a generic \"service temporarily unavailable\" message after max retries are exhausted.",
      B: "Return all errors with a retryable boolean flag and error type details.",
      C: "Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details",
      D: "Add few-shot examples to your system prompt demonstrating how to distinguish network errors from syntax errors and handle each case appropriately."
    },
    answer: ["C"],
    explanation: "Cleanly separates responsibilities: handles transient network issues inside the tool while immediately returning validation details for syntax errors."
  },
  {
    num: 17,
    kind: "single",
    q: "Users frequently send ambiguous requests like \"book a venue for the party without specifying date, guest count, or budget.\" Your evaluation shows the assistant asks an average of 4.2 clarifying questions before taking any action, causing 35% of users to abandon mid-conversation. However, when you reduce questions, users sometimes receive recommendations that don't match their preferences. What's the most effective approach to improve this trade-off?",
    options: {
      A: "Instruct the assistant to state explicit assumptions based on conversation history, proceed with recommendations while inviting corrections, and reserve clarifying questions only for irreversible actions like confirming bookings.",
      B: "Configure the assistant to proceed with reasonable defaults (medium-sized venue, next weekend, moderate budget) without explicitly stating these assumptions, allowing users to provide corrections if results don't match expectations.",
      C: "Implement a structured intake form that collects all required parameters (date, guest count, budget, venue type) upfront before the assistant begins providing any recommendations",
      D: "Configure the assistant to consolidate all clarifying questions into a single compound question (e.g., \"What date, guest count, and budget are you considering?\") to reduce the total number of conversational turns"
    },
    answer: ["D"],
    explanation: "Consolidating questions into a single compound question reduces user fatigue while explicitly capturing required constraints."
  },
  {
    num: 18,
    kind: "single",
    q: "Your document extraction tool uses ML models to extract invoice fields (vendor, amount, date). The models return confidence scores (0.0-1.0) for each extracted field. In production, you observe: (1) the agent proceeds with low-confidence extractions that are incorrect 23% of the time, and (2) the agent requests unnecessary human review for 31% of extractions that were actually correct. How should you restructure the tool's output?",
    options: {
      A: "Return fields with their raw confidence scores and add detailed few-shot examples to your system prompt demonstrating how to interpret different confidence ranges and when to request human review",
      B: "Compute an aggregate extraction quality score across all fields and return it alongside the extracted values. Include a text summary describing the overall extraction reliability.",
      C: "Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review.",
      D: "Return fields organized into verified and needs_verification objects based on confidence thresholds"
    },
    answer: ["C"],
    explanation: "Directly encodes decision logic into structured output, ensuring consistent behavior while preserving explainability at the field level."
  },
  {
    num: 19,
    kind: "single",
    q: "Your agent includes an update_game_score tool that accepts game date (string), home team (string), and away team (string) parameters. Production logs reveal recurring issues: the agent uses team nicknames instead of official names, applies inconsistent date formats, and selects the wrong game when teams have rematches in the same season. What tool interface change would effectively prevent these errors?",
    options: {
      A: "Add a season parameter to disambiguate rematches, and add a confirm_before_update flag that returns the resolved game details for the agent to verify before the score is committed.",
      B: "Add detailed examples to the tool description showing the required date format and complete list of official team names.",
      C: "Add enum constraints listing valid team names for both team parameters, and add a regex pattern enforcing ISO 8601 format for the date parameter.",
      D: "Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs."
    },
    answer: ["D"],
    explanation: "Removes ambiguity entirely by forcing the agent to resolve the exact entity first, then operate on a unique identifier, eliminating nickname and rematch errors."
  },
  {
    num: 20,
    kind: "single",
    q: "Your resource allocation tool returns a simple acknowledgment message after provisioning is requested. Users frequently approve allocations and immediately ask \"how much did that cost?\" or \"which project was that?\"-indicating they confirmed without understanding the request. What tool design change would most effectively address this?",
    options: {
      A: "Add a user_acknowledged boolean parameter that must be set true, with instructions for the agent to only set it after the user explicitly confirms they reviewed the details",
      B: "Implement a 60-second hold before execution completes, allowing users time to review pending allocations and cancel if needed",
      C: "Add a detail_level parameter with options \"minimal\" or \"comprehensive\" that controls how much context the agent presents in confirmations",
      D: "Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response"
    },
    answer: ["D"],
    explanation: "Ensures every allocation includes explicit, structured, reviewable details, reducing uninformed approvals."
  },
  {
    num: 21,
    kind: "single",
    q: "Your conversation history includes two types of content: persistent story elements (character backgrounds, plot structure, world rules) that must remain consistent throughout, and extensive brainstorming discussion that's mostly ephemeral. After 40+ turns, you're hitting context limits and users report the assistant \"forgets\" established character traits. Which approach best ensures persistent story elements remain available to the model while reclaiming context space?",
    options: {
      A: "Separate persistent story elements into a retained \"story bible\" section at context start, applying trimming or summarization only to brainstorming discussion",
      B: "Store all history in a vector database and retrieve semantically similar passages for each new message, replacing conversation history with retrieved chunks.",
      C: "Apply a sliding-window approach keeping only the most recent 25 turns, relying on the model to infer earlier context from recent discussion flow.",
      D: "Summarize the entire conversation history into a condensed synopsis every 20 turns, replacing the full history to free up tokens"
    },
    answer: ["A"],
    explanation: "Preserves high-value, invariant narrative constraints while allowing lower-value conversational content to be compressed, maintaining continuity."
  },
  {
    num: 22,
    kind: "single",
    q: "Your conversational assistant frequently generates multiple clarifying questions when users make ambiguous requests. When a user asks \"Can you help me with the report?\", the assistant responds. User analytics show a 40% conversation abandonment rate after these multi-question responses. What's the most effective way to reduce friction while appropriately handling ambiguity?",
    options: {
      A: "Limit the assistant to one clarifying question per turn, using conversation history to accumulate answers over multiple exchanges rather than requesting everything upfront.",
      B: "Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong.",
      C: "Add a preprocessing step using a smaller model to classify request ambiguity on a 1-5 scale, routing high-ambiguity requests to a clarification dialog and low-ambiguity requests directly to the assistant",
      D: "Create a lookup table of common request patterns with predefined default interpretations, having the assistant respond with those defaults without stating the assumptions made."
    },
    answer: ["B"],
    explanation: "The assistant provides immediate value, avoids question overload, and maintains transparency so users can correct assumptions quickly."
  },
  {
    num: 23,
    kind: "single",
    q: "Users frequently refine their search criteria mid-conversation. You notice a pattern when users say things like \"Actually, let's raise the budget to $650K\" or \"I'd prefer a condo now instead of a house,\" the assistant sometimes continues referencing the original preferences in later responses—even though the updates are clearly present in the conversation history. Context usage is only at 35% capacity. Which solution most reliably ensures the model uses the current preferences?",
    options: {
      A: "Maintain a structured state object with current preferences, update it on changes, and include it in each request.",
      B: "Implement conversation pruning to remove turns containing outdated preferences, ensuring only current ones remain in context",
      C: "Include few-shot examples showing the assistant correctly acknowledging and applying preference changes in responses.",
      D: "Add system prompt instructions emphasizing that the model should always prioritize the most recently stated preferences over earlier ones."
    },
    answer: ["A"],
    explanation: "Externalizes truth into a single authoritative state, preventing the model from having to infer which preference is current across many turns."
  },
  {
    num: 24,
    kind: "single",
    q: "Your conversational AI tutor has a 2,800-token system prompt containing teaching methodology, persona guidelines, and detailed written instructions for adapting explanations to different proficiency levels. User testing reveals that in conversations exceeding 12 turns, the assistant increasingly ignores proficiency-adaptation guidelines. What's the most effective approach to ensure consistent adherence?",
    options: {
      A: "Inject a condensed reminder of the proficiency requirements into the conversation as a system message every 4-5 turns.",
      B: "Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth.",
      C: "Restructure the system prompt to place the proficiency-adaptation rules in a clearly-marked final section immediately before the conversation history begins.",
      D: "After each assistant response, make a separate API call to evaluate whether the difficulty level matched the learner's profile, regenerating responses that don't align."
    },
    answer: ["B"],
    explanation: "Few-shot examples strongly anchor behavior, providing concrete patterns the model can consistently imitate across extended conversations."
  },
  {
    num: 25,
    kind: "single",
    q: "After deploying an updated system prompt that improves response quality, users with multi-session conversations spanning several weeks report that the assistant now contradicts its earlier statements and has a noticeably different communication style. New users don't experience these issues. What's the best approach to resolve this?",
    options: {
      A: "Regenerate summaries of existing conversations using the new prompt and replace the stored histories to align past context with current behavior.",
      B: "Add a transition message when sessions resume explaining that the assistant has been updated and behavior may differ",
      C: "Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations",
      D: "Add instructions to the new system prompt directing the assistant to maintain consistency with any prior statements in the conversation history."
    },
    answer: ["C"],
    explanation: "Versioning prompts ensures existing long-running sessions retain their original behavioral contract, avoiding mid-stream prompt contradictions."
  },
  {
    num: 26,
    kind: "single",
    q: "The coordinator agent has AgentDefinitions configured for all four specialized subagents. During testing, you notice the coordinator correctly reasons about when to delegate but no subagent execution ever occurs. Logs show no errors. What is the most likely cause?",
    options: {
      A: "The coordinator's max_tokens setting is too low, causing the Task tool invocation to be truncated before the subagent type parameter can be specified.",
      B: "The coordinator's allowed Tools configuration doesn't include \"Task\", so while it can reason about delegation, it cannot invoke the tool required to spawn subagents.",
      C: "Subagent context isolation means task descriptions from the coordinator don't automatically reach subagents.",
      D: "The Agent Definitions are configured correctly, but the coordinator's system prompt doesn't explicitly list available subagent types."
    },
    answer: ["B"],
    explanation: "Missing tool authorization leads to reasoning about tool use without execution capability, resulting in silent non-execution."
  },
  {
    num: 27,
    kind: "single",
    q: "Production reviews reveal inconsistent handling of uncertainty in final reports (overly confident vs. over-hedged). When the web search agent returns $50B market size and document analysis returns $35B with confidence intervals, the coordinator struggles. What systematic approach best addresses this?",
    options: {
      A: "Implement a confidence calibration layer that normalizes subagent uncertainty expressions to standardized probability scores.",
      B: "Instruct the synthesis agent to structure reports with explicit sections distinguishing well-established findings from contested ones, preserving original source characterizations and methodological context.",
      C: "Configure subagents to only report findings meeting a high-confidence threshold.",
      D: "Add a verification subagent that cross-references findings across sources."
    },
    answer: ["B"],
    explanation: "Structuring reports with explicit sections preserves nuance and source characterization without forcing incompatible numbers into arbitrary scores."
  },
  {
    num: 28,
    kind: "single",
    q: "You've configured the system so that all four subagents have access to the complete set of 18 tools. During testing, agents frequently call tools outside their specialization. What is the primary cause of this poor tool selection behavior?",
    options: {
      A: "Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds.",
      B: "The agents' role descriptions in their system prompts conflict with having access to tools outside that role.",
      C: "The tool definitions consume too much context window space.",
      D: "The coordinator cannot track which capabilities each subagent has."
    },
    answer: ["A"],
    explanation: "As available tools grow, choice entropy increases, degrading tool selection accuracy and causing cross-role tool misuse."
  },
  {
    num: 29,
    kind: "single",
    q: "The coordinator provides detailed step-by-step instructions to the web search subagent. Production monitoring reveals issues: subagents report insufficient results rather than trying alternative approaches, research quality drops for emerging topics, and tangential sources are missed. What's the most effective way to improve subagent adaptability?",
    options: {
      A: "Specify research goals and quality criteria (coverage breadth, source diversity, recency) rather than procedural steps, letting the subagent determine its search strategy.",
      B: "Add explicit fallback directives to the detailed instructions.",
      C: "Remove procedural details entirely, delegating with simple goals like \"research X thoroughly\".",
      D: "Implement a topic classification step."
    },
    answer: ["A"],
    explanation: "Shifting from procedural control to objective-driven autonomy allows subagents to adapt when initial queries fail and explore tangential sources."
  },
  {
    num: 30,
    kind: "single",
    q: "The synthesis agent receives summarized findings, then passes a consolidated summary to the report generator. Generated reports make factual claims without proper citations because source metadata was lost during summarization. What's the most effective approach to ensure proper source attribution?",
    options: {
      A: "Have each agent output structured data separating content summaries from source metadata (URLs, document names, page numbers).",
      B: "Have the report generator query the web search agent to re-locate sources.",
      C: "Skip summarization and pass full raw outputs directly to the report generator.",
      D: "Instruct the synthesis agent to embed source references inline within its summary text."
    },
    answer: ["A"],
    explanation: "Preserving provenance as first-class structured data ensures citations are never lost during summarization."
  },
  {
    num: 31,
    kind: "single",
    q: "A user is expanding the research system by adding specialized data sources (financial API, news monitoring, patent analysis). The synthesis agent currently converts everything to bullet points, causing financial comparisons to lose tabular clarity and news summaries to lose narrative flow. What change would most improve briefing quality?",
    options: {
      A: "Update the synthesis agent to render each content type appropriately-financial data as tables, news as prose.",
      B: "Standardize all subagent outputs to JSON with fields for claim, evidence, source, and confidence",
      C: "Add a format conversion layer between subagents and synthesis.",
      D: "Standardize all subagent outputs to prose summaries with inline citations"
    },
    answer: ["A"],
    explanation: "Making the synthesis layer format-aware preserves the native structure of each data type."
  },
  {
    num: 32,
    kind: "single",
    q: "When the agent calls lookup_order and receives order details showing the item was purchased 45 days ago, how does the agentic loop determine whether to call process_refund or escalate_to_human next?",
    options: {
      A: "The agent executes remaining steps in a tool sequence planned at the start.",
      B: "The order details are added to the conversation and the model reasons about which action to take.",
      C: "The agent follows a pre-configured decision tree.",
      D: "The orchestration layer automatically routes to the next tool based on status."
    },
    answer: ["B"],
    explanation: "Tool observations are fed back into context, enabling the model to dynamically re-evaluate and reason about the next step."
  },
  {
    num: 33,
    kind: "single",
    q: "The agent verifies customer identity through a multi-step process. After the third verification question, the agent asks for the customer's name again, as if the earlier exchange never happened. What's the most likely cause of this behavior?",
    options: {
      A: "Claude's memory retention is limited to two conversational turns by default.",
      B: "The prompt lacks instructions telling Claude to remember information across multiple exchanges.",
      C: "The verification tool is cleaning the agent's internal state.",
      D: "The conversation history isn't being passed in subsequent API requests."
    },
    answer: ["D"],
    explanation: "Stateless APIs require prior messages to be explicitly sent with every request; failing to do so causes complete loss of history."
  },
  {
    num: 34,
    kind: "single",
    q: "When implementing your lookup_order MCP tool, the backend sometimes returns errors (\"Order not found\" or temporary database failures). What is the correct pattern for communicating these errors back to the agent?",
    options: {
      A: "Log the error server-side and return an empty result.",
      B: "Throw an exception from the tool handler so the framework catches it.",
      C: "Return the error message in the tool result content with the isError flag set to true",
      D: "Return a success response with a \"status\" field indicating the error type."
    },
    answer: ["C"],
    explanation: "Setting `isError: true` explicitly signals failure while providing a readable error message for the agent to decide next steps."
  },
  {
    num: 35,
    kind: "single",
    q: "Evaluation shows 94% extraction accuracy on short transcripts (<30 min) but only 68% on longer transcripts (>60 min) where discussions meander. Both fit within context. What pattern most effectively improves accuracy on complex, lengthy documents?",
    options: {
      A: "Add few-shot examples demonstrating correct extraction from lengthy meetings.",
      B: "Split lengthy transcripts into chunks, extract from each chunk separately, then merge and deduplicate the results",
      C: "Upgrade to a more capable model tier.",
      D: "Add a pre-extraction step where the model summarizes key discussions."
    },
    answer: ["B"],
    explanation: "Chunking reduces cognitive load per extraction pass and improves recall of scattered details before merging and deduplication."
  },
  {
    num: 36,
    kind: "single",
    q: "Human reviewers have corrected 847 extractions where informal measurements like \"a handful\" or \"a splash\" caused the model to invent amounts or omit fields (23% of corrections). How should you use this feedback to improve extraction accuracy?",
    options: {
      A: "Update your JSON schema to add a \"measurement type\" enum field.",
      B: "Add few-shot examples to your prompt demonstrating correct handling of informal measurements—extracting them verbatim rather than converting or omitting them.",
      C: "Implement a post-processing layer using pattern matching.",
      D: "Fine-tune the model on the 847 corrected extractions."
    },
    answer: ["B"],
    explanation: "Few-shot examples based on real corrections directly target the failure mode, teaching verbatim extraction."
  },
  {
    num: 37,
    kind: "single",
    q: "Production monitoring shows follow-up queries like \"summarize what we learned about market trends\" take 40 seconds because the coordinator spawns the synthesis subagent with 80K+ tokens. What's the most effective way to improve response time?",
    options: {
      A: "Enable prompt caching on the synthesis subagent.",
      B: "Have the coordinator handle straightforward summarization requests directly using its existing context, reserving subagent spawning for complex analysis tasks.",
      C: "Spawn the synthesis subagent with reduced context and have it request specific findings on-demand.",
      D: "Pre-generate and cache summaries at multiple granularities."
    },
    answer: ["B"],
    explanation: "Handling straightforward summaries directly avoids unnecessary orchestration overhead and rehydrating large contexts into subagents."
  },
  {
    num: 38,
    kind: "single",
    q: "The document analysis agent has a single analyze_document tool taking a document and free-text instruction. Requests for key financial metrics return narrative summaries, while summarization requests return raw data tables (35% require re-requests). What's the most effective way to improve reliability?",
    options: {
      A: "Enhance the tool description with detailed examples.",
      B: "Keep the single tool but add an analysis type enum parameter.",
      C: "Split the generic tool into purpose-specific tools (extract data points, summarize content, verify claim against source) each with defined input/output contracts",
      D: "Have the coordinator pre-classify each analysis request."
    },
    answer: ["C"],
    explanation: "Splitting overloaded tools into purpose-specific tools with clear input/output contracts eliminates ambiguity."
  },
  {
    num: 39,
    kind: "single",
    q: "The system routes extractions below 85% confidence to human review. A quarterly audit reveals 12% of high-confidence extractions also contain errors (plausible-but-incorrect values due to comparison tables, appendices, ambiguous phrasing). You need a sustainable strategy to catch these high-confidence errors and measure improvements over time. What approach is most effective?",
    options: {
      A: "Implement heuristic rules flagging comparison tables or appendices.",
      B: "Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection.",
      C: "Add a verification pass that re-extracts from each high-confidence document.",
      D: "Lower the confidence threshold from 85% to 70%."
    },
    answer: ["B"],
    explanation: "Stratified random sampling is a sustainable, statistically sound approach that measures ongoing error rates and surfaces emerging failure patterns."
  },
  {
    num: 40,
    kind: "single",
    q: "Property type enum validation fails because listings mention uncommon property types (\"studio\", \"loft\", \"duplex\", \"mobile home\", \"tiny house\"), and new types continue appearing. What's the most effective long-term solution?",
    options: {
      A: "Add an \"other\" value to your enum with a separate property_type_detail string field for specifics when \"other\" is selected.",
      B: "Change property_type from an enum to a free-form string and implement post-processing normalization.",
      C: "Add few-shot examples mapping unexpected property types to closest existing enum values.",
      D: "Continuously expand the enum to include newly observed property types."
    },
    answer: ["A"],
    explanation: "Preserves schema validity while capturing new or uncommon types without breaking validation or losing downstream consistency."
  },
  {
    num: 41,
    kind: "single",
    q: "The model inconsistently extracts the \"materials\" field from e-commerce product descriptions (sometimes \"cotton blend\", sometimes \"Cotton/Polyester mix\", sometimes omitting when present). What's the most effective way to improve extraction consistency?",
    options: {
      A: "Set temperature to 0 to eliminate randomness.",
      B: "Switch to a more capable model tier.",
      C: "Make the \"materials\" field required instead of optional.",
      D: "Add few-shot examples showing 2-3 complete input-output pairs with standardized material description formats"
    },
    answer: ["D"],
    explanation: "Few-shot examples directly teach the expected normalization pattern and when to consistently extract rather than omit."
  },
  {
    num: 42,
    kind: "single",
    q: "Documents arrive continuously throughout business hours and need extractions. The Message Batches API offers a 50% discount and up-to-24-hour processing window. Your SLA specifies results must be available within 30 hours of arrival with 99.9% reliability. Which batching strategy is most appropriate?",
    options: {
      A: "Submit batches every 4 hours.",
      B: "Submit batches every 6 hours.",
      C: "Submit a single batch at end of day containing all documents from that day",
      D: "Use the real-time API for all documents."
    },
    answer: ["C"],
    explanation: "End-of-day batching comfortably meets the 30-hour SLA while maximizing cost savings and operational simplicity."
  },
  {
    num: 43,
    kind: "single",
    q: "Restaurant menus use inconsistent formatting (prices as \"$12\" vs \"12:00\", dietary info as icons vs text). What's the most reliable approach?",
    options: {
      A: "Extract data as-is and normalize formats in post-processing code.",
      B: "Define a strict output schema and include format normalization rules in your prompt.",
      C: "Use separate extraction calls for each field.",
      D: "Request multiple extraction attempts and select the most common format."
    },
    answer: ["B"],
    explanation: "Enforcing structure through a schema while guiding normalization in the prompt handles inconsistencies at extraction time."
  },
  {
    num: 44,
    kind: "single",
    q: "Your system extracts event metadata from news articles using a schema with nullable fields. The model frequently generates plausible but incorrect values for fields not mentioned in the article. What's the most effective way to reduce these false extractions?",
    options: {
      A: "Make all schema fields required (non-nullable) with strict validation rules.",
      B: "Add prompt instructions to return null for any field where information is not directly stated in the source.",
      C: "Upgrade to a more capable model tier.",
      D: "Add a post-processing step using a second LLM call."
    },
    answer: ["B"],
    explanation: "Enforces explicit extraction rules: only extract explicitly supported data, otherwise return null."
  },
  {
    num: 45,
    kind: "single",
    q: "Research assistant users ask follow-up questions requiring precise numerical details from papers discussed earlier (sample sizes, exact p-values). Summarizing paper discussions after 8 turns causes hedged or inaccurate responses. What's the most effective architectural change?",
    options: {
      A: "Implement retrieval that re-injects relevant paper sections.",
      B: "Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected.",
      C: "Keep source text from methodology and results sections in context permanently.",
      D: "Use a separate Claude call to generate higher-fidelity summaries preserving all numerical details."
    },
    answer: ["B"],
    explanation: "Separates stable factual data into a structured fact store, ensuring precise values remain accessible across extended sessions."
  },
  {
    num: 46,
    kind: "single",
    q: "A fitness coaching assistant struggles when users don't clearly state their experience level, defaulting to overly detailed responses regardless of technical terminology. Which change to the system prompt would most directly address this?",
    options: {
      A: "Add an explicit instruction to ask a clarifying question whenever expertise isn't clear.",
      B: "Replace most conditionals with a general principle: \"Adapt explanation depth to match user expertise, mirroring their terminology.\" Keep only the safety-critical conditional about injury consultations.",
      C: "Implement a pre-conversation intake asking users to rate their experience level.",
      D: "Add more conditional branches covering additional expertise signals."
    },
    answer: ["B"],
    explanation: "A general adaptive principle allows the model to infer expertise from implicit signals (terminology, phrasing) instead of rigid rules."
  },
  {
    num: 47,
    kind: "single",
    q: "When engineers need to locate all occurrences of a dangerous function like eval() across a large codebase, which tool should your agent use for content search?",
    options: {
      A: "Use Grep to search for the pattern \"eval(\" across all files in the codebase",
      B: "Use Glob with a pattern like \"*eval\" to find files, then Read each matching file",
      C: "Use Bash to run `ls -R | grep eval` to recursively list files.",
      D: "Read the project's main entry file and follow import statements."
    },
    answer: ["A"],
    explanation: "Grep is specifically designed for content searching within files, making it the most efficient tool for code auditing."
  },
  {
    num: 48,
    kind: "single",
    q: "An agent has identified that caching logic spans 15 files including decorators, middleware, and service classes (8,000 lines total). What's next step for building understanding while managing context constraints?",
    options: {
      A: "Use Glob to find files matching common caching patterns, prioritize largest files.",
      B: "Use the Read tool to sequentially load all 15 files.",
      C: "Use Grep to search for \"invalidate\" and \"expire\" patterns across all files.",
      D: "Analyze imports and class hierarchies to identify the base cache class. Read that file to understand the interface, then trace specific invalidation implementations"
    },
    answer: ["D"],
    explanation: "Starting from the base class provides architectural understanding before tracing specific implementations."
  },
  {
    num: 49,
    kind: "single",
    q: "A user wants to resume a specific investigation session named \"auth-deep-dive\" after working on other codebases. How should she resume?",
    options: {
      A: "Start fresh and re-read the same files.",
      B: "Use `-resume auth-deep-dive` to load that specific session by name",
      C: "Use `continue` to pick up where the most recent conversation left off.",
      D: "Use `-session-id` with the UUID from yesterday's session transcript file."
    },
    answer: ["B"],
    explanation: "Using resume with the session name directly restores the exact conversation and state of a named session."
  },
  {
    num: 50,
    kind: "single",
    q: "You're the Lead Data Scientist Engineer on a critical project with potential negative impacts on expected outputs. Two engineers need to independently develop test approaches. How do you manage this scenario?",
    options: {
      A: "Start two fresh sessions, having each re-read relevant source files.",
      B: "Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially.",
      C: "Resume the analysis session with fork session enabled, creating a separate branch for each testing strategy",
      D: "Export the analysis session's key findings to a file, then create two new sessions referencing it."
    },
    answer: ["C"],
    explanation: "Forking allows both testing strategies to start from the same investigation context and evolve independently without losing prior analysis."
  },
  {
    num: 51,
    kind: "single",
    q: "A security audit requires updating your authentication library from v2 to v3 with breaking changes affecting 45 files across several modules. What's the most effective approach?",
    options: {
      A: "Paste the migration guide into your prompt and use direct execution to update all files.",
      B: "Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing",
      C: "Update dependency version, run test suite, and fix failures as they appear.",
      D: "Create a custom slash command encapsulating migration transformations."
    },
    answer: ["B"],
    explanation: "Major upgrades affecting many files require systematic planning and codebase exploration before modifying code."
  },
  {
    num: 52,
    kind: "single",
    q: "During extended exploration sessions (30 minutes), the agent starts giving inconsistent answers about context discussed earlier, requiring repeated context. What's the most effective approach to address this?",
    options: {
      A: "Create summaries of all source files before exploration begins.",
      B: "Switch to a higher-capacity model tier.",
      C: "Implement automatic context clearing every 15 minutes.",
      D: "Have the agent maintain a scratchpad file that records key findings, referencing it for subsequent questions."
    },
    answer: ["D"],
    explanation: "Maintaining a persistent scratchpad allows the agent to consistently reference prior work without context degradation."
  },
  {
    num: 53,
    kind: "single",
    q: "An old string parameter cannot find unique text to match because the file has repetitive docstrings, variable names, and structural patterns. What is a reliable way to complete this insertion?",
    options: {
      A: "Use Edit with an extremely long old string capturing 30 lines of context.",
      B: "Use Read to load the file, add the function at the appropriate location, then Write the updated file",
      C: "Use Edit's replace all parameter to target a common pattern.",
      D: "Use Bash to append the function definition using heredoc syntax."
    },
    answer: ["B"],
    explanation: "Reading the full file and explicitly rewriting it avoids string-matching ambiguity when patterns are repetitive."
  },
  {
    num: 54,
    kind: "single",
    q: "You need to add a date validation check ensuring event dates are in the future, requiring a conditional statement in one existing function in a single file. What is the most appropriate approach?",
    options: {
      A: "Enter plan mode to analyze how validation impacts other reservation flow parts.",
      B: "Start with extended thinking mode enabled.",
      C: "Use direct execution to make the change",
      D: "Enter plan mode first to create a detailed implementation strategy."
    },
    answer: ["C"],
    explanation: "Small, localized modifications in a single file do not require architectural planning; direct execution is appropriate for quick, low-risk changes."
  },
  {
    num: 55,
    kind: "single",
    q: "Your team's CLAUDE.md specifies Prettier formatting, but 30% of generated files use inconsistent formatting. Prompt emphasis reduces violations to 15%. What is the most effective way to ensure all generated code is consistently formatted?",
    options: {
      A: "Extract formatting rules into a dedicated skill.",
      B: "Add a Stop hook with a prompt-based check.",
      C: "Configure a PostToolUse hook with an Edit/Write matcher that automatically runs Prettier on each file Claude modifies",
      D: "Split formatting rules into path-scoped files."
    },
    answer: ["C"],
    explanation: "Automating formatting via a PostToolUse hook ensures deterministic code formatting on every modification without relying solely on LLM compliance."
  },
  {
    num: 56,
    kind: "single",
    q: "You've asked Claude Code to build a PDF report generation feature with interacting formatting issues (column widths, date formatting, page breaks). What's the most effective approach for iterating toward a working solution?",
    options: {
      A: "Address the column width issue first with specific measurements, verify it works, then fix date formatting within corrected columns, then adjust page breaks-testing after each change.",
      B: "Provide all three issues in a single detailed message with exact specifications.",
      C: "Show Claude an example of a correctly formatted report and ask it to match output.",
      D: "Start fresh with a detailed prompt specifying all requirements upfront."
    },
    answer: ["A"],
    explanation: "Tackling interdependent issues sequentially with testing after each change isolates variables and prevents compounding errors."
  },
  {
    num: 57,
    kind: "single",
    q: "You're implementing Redis caching for API responses (/products) with a 5-minute TTL, but you're new to production caching. What's the most effective way to start your iterative workflow?",
    options: {
      A: "Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes.",
      B: "Use plan mode to analyze the current products endpoint implementation.",
      C: "Start with a minimal request and add features through follow-up prompts.",
      D: "Write a specification with known requirements and TBD markers."
    },
    answer: ["A"],
    explanation: "An interactive clarification interview surfaces missing requirements, constraints, invalidation strategies, and failure modes before implementation begins."
  },
  {
    num: 58,
    kind: "single",
    q: "You're implementing a complex graph traversal algorithm with specific performance requirements and edge cases (disconnected nodes, cycles, weighted edges). What approach will most effectively enable progressive improvement across multiple iterations?",
    options: {
      A: "Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes tests, then iterate by sharing test failures with each refinement request.",
      B: "Provide Claude with a detailed natural language specification and review outputs manually.",
      C: "Provide a reference implementation from documentation and ask it to rewrite.",
      D: "Have Claude research the algorithm and create an implementation plan using extended thinking."
    },
    answer: ["A"],
    explanation: "Defining a test suite upfront creates an objective correctness target, ensuring edge cases are explicitly covered and making refinement efficient and measurable."
  },
  {
    num: 59,
    kind: "single",
    q: "Your team is configuring MCP servers in Claude Code. You want to add a shared venue lookup server for all team members and an experimental music playlist server that only you are testing. Which configuration approach correctly applies MCP server scopes?",
    options: {
      A: "Add venue server to mcp.json and playlist server to ~/.claude.json",
      B: "Add both servers to the project-level mcp.json file.",
      C: "Add venue server to claude.json and playlist server to mcp.json.",
      D: "Add both servers to your local ~/.claude.json"
    },
    answer: ["A"],
    explanation: "Project-level configuration (mcp.json) is used for shared team servers, while user-level configuration (~/.claude.json) is used for personal/experimental tools."
  },
  {
    num: 60,
    kind: "single",
    q: "Your IaC repository includes Terraform modules, Kubernetes manifests, and CI/CD scripts. Your single root CLAUDE.md has grown to 500+ lines, loading irrelevant rules. What is the best approach to reorganize so only relevant guidance loads when editing specific file types?",
    options: {
      A: "Restructure root CLAUDE.md into clearly labeled sections with headers.",
      B: "Split content into subdirectory CLAUDE.md files.",
      C: "Keep root CLAUDE.md and use @path/to/import syntax.",
      D: "Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: [\"terraform/*\"]), loading rules only when editing matching files"
    },
    answer: ["D"],
    explanation: "Path-scoping rules via YAML frontmatter ensures that tool- or directory-specific instructions load only when editing matching file types, preventing token waste."
  }
]