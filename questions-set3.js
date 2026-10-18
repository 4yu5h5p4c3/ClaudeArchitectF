const quizSet3 = [
  {
    num: 1,
    kind: "single",
    q: "Your team frequently migrates React components to Vue. You've written a step-by-step workflow for Claude Code to follow during each migration, and you want every developer on the team to invoke it by typing /migrate-component. The workflow should stay in sync as the team iterates on it. Where should you place the skill file?",
    options: {
      A: "In .claude/skills/migrate-component/SKILL.md on each developer's machine",
      B: "In the project's claude/settings.json using a skillOverrides entry to register and define the workflow",
      C: "In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control",
      D: "As a detailed instruction block in the project's root CLAUDE.md file"
    },
    answer: ["C"],
    explanation: "A shared team workflow like /migrate-component should live in the project-level skills directory under version control to ensure consistency and git tracking."
  },
  {
    num: 2,
    kind: "single",
    q: "A critical bug is affecting production users. Error logs show exceptions in the OrderProcessing module with a clear stack trace pointing to a specific function. You haven't worked with this module before. What's the most effective approach?",
    options: {
      A: "Start with direct execution to gather initial information, then switch to plan mode to design a comprehensive solution before implementing any changes",
      B: "Use plan mode to analyze the error in context of the module's design, enumerate potential root causes, and prioritize fixes systematically.",
      C: "Enter plan mode to explore the module's architecture and dependencies before attempting any fixes",
      D: "Use direct execution to examine the stack trace, read the relevant code, and implement a fix once you identify the root cause"
    },
    answer: ["D"],
    explanation: "Since the failure location is already well-identified by the stack trace, direct execution minimizes overhead and enables a targeted fix."
  },
  {
    num: 3,
    kind: "single",
    q: "You're implementing a new payment processing module that must follow your project's established patterns for database transactions, error handling, and audit logging. You've identified three existing modules that exemplify these patterns: db_utils.py, error_handlers.py, and audit_logger.py. This is a one-off integration task—these patterns are well-documented in your team wiki and don't need additional project-level documentation. What's the most effective approach?",
    options: {
      A: "Describe the patterns from the three modules in natural language in your prompt, explaining the transaction handling approach, error format, and logging conventions Claude should follow",
      B: "Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow.",
      C: "Ask Claude to explore your codebase to find and understand the transaction, error handling, and logging patterns before generating the new module",
      D: "Add documentation of each pattern to your CLAUDE.md file, establishing them as project conventions that Claude will apply automatically."
    },
    answer: ["B"],
    explanation: "Providing direct code references ensures Claude accurately replicates concrete implementation conventions without ambiguity."
  },
  {
    num: 4,
    kind: "single",
    q: "You've asked Claude to write a data migration script, but the initial output doesn't correctly handle records with null values in required fields. What's the most effective way to iterate toward a working solution?",
    options: {
      A: "Provide a test case with example input containing null values and the expected output, then ask Claude to fix it.",
      B: "Manually edit the generated code to fix the null handling, then continue working with Claude on other parts.",
      C: "Describe the null value problem in detail and ask Claude to regenerate the entire script with improved edge case handling.",
      D: "Add \"think harder about edge cases\" to your prompt and request a complete rewrite of the migration logic."
    },
    answer: ["A"],
    explanation: "Providing concrete input/output test examples establishes a precise contract for expected behavior, enabling testable and accurate adjustments."
  },
  {
    num: 5,
    kind: "single",
    q: "You've documented API error handling conventions in a CLAUDE.md file at your project root, specifying that endpoint handlers should use a custom ApiError class. After several sessions, you notice Claude Code sometimes follows these conventions and sometimes uses generic try/catch blocks with string messages. The inconsistency appears random across different coding sessions. What's the most efficient first diagnostic step?",
    options: {
      A: "Add more detailed code examples to your CLAUDE.md showing the exact ApiError usage pattern for different endpoint types.",
      B: "Run /memory to check which memory files are loaded and verify your CLAUDE.md is included.",
      C: "Search for conflicting instructions in .claude/CLAUDE.md or .claude/rules/ that might override your project conventions.",
      D: "Create path-specific rules in .claude/rules/handlers.md with YAML frontmatter scoping the error handling instructions to your API handler files."
    },
    answer: ["B"],
    explanation: "Checking /memory verifies whether project-level context and CLAUDE.md are actually loaded into the current session."
  },
  {
    num: 6,
    kind: "single",
    q: "Your monorepo contains shared coding standards in /docs/standards/security-rules.md, testing-patterns.md, and api-conventions.md. Your 15 packages are organized by feature domain without naming conventions indicating which handle user data or expose APIs. Package maintainers configure their own local development settings. Currently, all package CLAUDE.md files duplicate all three standards, applying irrelevant guidance. What's the most effective approach?",
    options: {
      A: "Create .claude/rules/ files for each standard with YAML frontmatter paths listing every package directory where that standard should apply.",
      B: "Create a shared-standards.md that uses @imports to combine all three standards, then have each package's CLAUDE.md import that combined file.",
      C: "Put all standards in the root CLAUDE.md with override instructions like \"ignore security-rules.md when working in packages that don't handle user data.\"",
      D: "Use @imports in each package's CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer's domain knowledge"
    },
    answer: ["D"],
    explanation: "Since package structure doesn't indicate standards and maintainers understand domain requirements, importing only relevant standards eliminates duplication and token waste."
  },
  {
    num: 7,
    kind: "single",
    q: "The system processes product reviews using tool use with a defined schema: rating (integer 1-5), pros (string array), cons (string array), and overall_sentiment (enum: positive, negative, mixed). Testing reveals two issues with brief or ambiguous reviews (20% of the dataset): (1) for reviews like \"Great product!\", Claude fabricates specific pros and cons rather than indicating this information isn't explicitly stated, and (2) for sarcastic reviews like \"Well that was... interesting\", Claude picks sentiment arbitrarily since there's no option for ambiguous cases. What schema modification best addresses both issues?",
    options: {
      A: "Add an extraction_confidence field (0.0-1.0) for each value, and filter outputs where any confidence falls below a threshold.",
      B: "Allow null values for pros/cons, and add \"unclear\" to the sentiment enum.",
      C: "Allow empty arrays for pros/cons as valid output, and add \"unclear\" to the sentiment enum.",
      D: "Make pros and cons optional fields, and add \"neutral\" and \"unclear\" to the sentiment enum"
    },
    answer: ["C"],
    explanation: "Empty arrays accurately represent unstated pros/cons instead of hallucinating details, and \"unclear\" provides a valid option for ambiguous sentiment."
  },
  {
    num: 8,
    kind: "single",
    q: "After your daily batch of 10,000 documents completes, 300 documents (3%) failed with \"context_length_exceeded\" errors. The results file identifies each failure by custom id. What's the most cost-effective approach to process these failures?",
    options: {
      A: "Reprocess the entire batch with prompt caching enabled to reduce the cost of retrying requests with identical system prompts",
      B: "Resubmit only the 300 failed documents after chunking them into smaller pieces, then combine the partial extractions",
      C: "Increase the max tokens parameter for the 300 failed documents and resubmit them in a new batch",
      D: "Resubmit the entire 10,000 document batch using a model tier with a larger context window"
    },
    answer: ["B"],
    explanation: "Retrying only the failed documents by splitting them into smaller chunks avoids reprocessing the 9,700 documents that already succeeded."
  },
  {
    num: 9,
    kind: "single",
    q: "The system needs to extract candidate information from uploaded resumes. The extracted data must strictly conform to a predefined JSON schema, as missing required fields or incorrect data types will cause downstream validation failures. What is the most reliable approach to ensure Claude's output consistently matches the schema?",
    options: {
      A: "Define a tool with an input schema matching your required JSON structure and extract the data from Claude's tool_use response",
      B: "Include detailed JSON formatting instructions and a template example in the system prompt, asking Claude to output only valid JSON",
      C: "Parse Claude's text response with regex patterns to extract JSON objects, using retry logic for malformed responses",
      D: "Make two separate API calls—first extracting information as text, then asking Claude to format that text as JSON"
    },
    answer: ["A"],
    explanation: "Tool use with a defined schema rigorously enforces required properties, data types, and field names, eliminating free-form parsing errors."
  },
  {
    num: 10,
    kind: "single",
    q: "After deploying automated code review, developers report that approximately 35% of flagged findings are false positives falling into consistent patterns: style suggestion contradicting team conventions, security warnings for patterns safe in your deployment context, and performance suggestions that would degrade your specific use case. You want to reduce false positives while maintaining the ability to catch genuine issues. Which approach best enables the model to generalize its judgment to novel code patterns it hasn't seen before?",
    options: {
      A: "Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category.",
      B: "Implement post-processing that uses keyword matching to filter out findings containing terms like \"convention,\" \"context-dependent,\" or \"trade-off.\"",
      C: "Add instructions to your system prompt to \"be conservative,\" \"only flag definite issues,\" and \"consider that some patterns may be intentional\"",
      D: "Create a comprehensive written specification of all patterns that should not be flagged, then include this full documentation in the system prompt"
    },
    answer: ["A"],
    explanation: "Few-shot examples teach underlying distinctions and decision-making criteria, allowing the model to generalize to unseen code scenarios."
  },
  {
    num: 11,
    kind: "single",
    q: "After expanding the agent's MCP tools with delivery-specific capabilities, the total tool count has grown from 4 to 10. Your evaluation suite shows tool selection accuracy has dropped to 71%. Log analysis reveals the majority of errors involve the agent selecting between semantically overlapping tools—calling issue_credit when process_refund is correct, and calling check_delivery_status when lookup_order already returns the needed data. Which approach structurally eliminates the semantic overlaps that are being logged as the error source?",
    options: {
      A: "Split the tools across two sub-agents—a \"financial resolution\" agent with process_refund, issue_credit, and apply_promo_code, and a \"delivery\" agent with the remaining delivery tools—with a coordinator routing between them",
      B: "Add few-shot examples to the system prompt demonstrating correct selection for each ambiguous tool pair such as showing when issue_credit or process_refund is appropriate",
      C: "Consolidate semantically overlapping tools—merge issue_credit and process_refund into a single resolve_compensation tool with an optional include tracking flag",
      D: "Enable the tool search tool with defer loading on the six new tools, keeping the original four always loaded, so the agent dynamically calls it when needed."
    },
    answer: ["C"],
    explanation: "Merging overlapping tools removes ambiguity entirely, eliminating the need for the model to choose between similar intents."
  },
  {
    num: 12,
    kind: "single",
    q: "Anthropic's tool use documentation states \"Write instructive error messages. Instead of generic errors like 'failed', include what went wrong and what Claude should try next.\" A billing dispute agent uses lookup_order, which catches all exceptions and returns a tool result with is_error: true and the message \"execution failed\". Monitoring shows two failure modes: the agent retries the identical call until hitting the turn limit, or it immediately calls escalate_to_human without trying alternative tools. Which change follows the documented recommendation and gives Claude the information it needs to select the correct recovery action for each error type?",
    options: {
      A: "Implement retry logic with exponential backoff inside each tool implementation so transient errors are resolved transparently within the tool before any failure result is surfaced to Claude in the agentic loop.",
      B: "Return error-type-specific messages with is_error: true, e.g., \"order not found—try get_customer to search by phone\" for data errors and \"Database timeout (transient)—retry should succeed\" for infrastructure errors",
      C: "Remove is_error: true and return the error details as normal tool content, so Claude reasons about the response as data rather than treating it as a flagged failure condition that biases retry behavior.",
      D: "Add an error classification step in the agentic loop that intercepts tool errors before Claude sees them, tags each as \"retry\", \"try_alternative\", or \"escalate\", and adds that recommendation to the tool result."
    },
    answer: ["B"],
    explanation: "Instructive error messages explain both what went wrong and what action Claude should take next, guiding proper recovery."
  },
  {
    num: 13,
    kind: "single",
    q: "Your code review prompts include both implementation changes and the corresponding test file, but the LLM's review comments fail to point out untested code paths. Analysis reveals the model correctly flags functions that have no tests at all, but fails to identify when conditional branches or error-handling paths within tested functions lack coverage. What's the most effective way to improve detection of branch-level coverage gaps without overcomplicating the pipeline?",
    options: {
      A: "Implement a multi-pass pipeline where separate LLM calls first extract all conditional branches, then cross-reference each against test assertions in a second pass.",
      B: "Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case.",
      C: "Add explicit instructions directing the model to enumerate each conditional branch and exception path, then verify each has a corresponding test assertion.",
      D: "Restructure the prompt to interleave implementation and tests, presenting each function followed immediately by its test cases"
    },
    answer: ["B"],
    explanation: "Few-shot examples effectively map the model to the desired branch-checking behavior in code reviews."
  },
  {
    num: 14,
    kind: "single",
    q: "After deploying the automated review, you notice high precision but low recall—real bugs are slipping through undetected. Investigation reveals your review prompt instructs Claude to \"only report high-confidence issues you are certain about\" and \"err on the side of not commenting\". Developers appreciate the low noise, but a race condition that caused a production outage was visible in a reviewed PR and went unreported. You need to substantially improve bug detection while keeping false positive rates manageable for your team. What is the most effective approach?",
    options: {
      A: "Expand the context window by including related test files, recent git history, and the module's dependency graph alongside the diff, giving Claude richer signals to assess issue severity.",
      B: "Remove the conservative filtering instructions and prompt Claude to report all potential issues, then apply a programmatic filter to deduplicate and suppress categories that historically generate false positives.",
      C: "Split the review into a finding stage—where Claude's goal is coverage flagging every potential issue with confidence and severity metadata—and a separate filtering stage that applies team-specific thresholds to those findings.",
      D: "Add detailed few-shot examples demonstrating bug categories Claude should flag (race conditions, null dereferences, error handling gaps) while keeping confidence filtering instructions to maintain current precision levels"
    },
    answer: ["C"],
    explanation: "Separating detection (maximizing recall) from filtering (applying thresholds to manage noise) avoids forcing the model to optimize for conflicting goals simultaneously."
  },
  {
    num: 15,
    kind: "single",
    q: "Your automated reviewer uses a single prompt covering security issues, API design, and business logic correctness. Your evaluation suite shows strong recall findings (82%) but poor recall for business logic edge cases in quiz scoring (34%). When you add few-shot examples of logic bugs to the prompt, logic recall is 41% but API design recall drops to 68%. How should you address this trade-off to improve detection across both categories?",
    options: {
      A: "Split the review into separate focused prompts—one for security and API design, another for business logic—each with dedicated examples, then combine findings before posting.",
      B: "Upgrade to a more capable model tier, since its stronger reasoning will handle both concern types in a single prompt and eliminate the recall trade-off.",
      C: "Provide the full repository as context instead of just the changed files and surrounding code, giving the model deeper visibility into business logic.",
      D: "Replace the few-shot examples with a detailed checklist of specific logic edge cases to verify, such as division-by-zero in score calculation or grading thresholds."
    },
    answer: ["A"],
    explanation: "Separating concerns into specialized review passes avoids prompt-capacity trade-offs and context competition between distinct objectives."
  },
  {
    num: 16,
    kind: "single",
    q: "Your agent is handling a billing dispute. After calling get_customer and lookup_order, it identifies that the dispute involves a promotional pricing error requiring manager approval—beyond the agent's authorization level. How should the workflow handle this mid-process escalation?",
    options: {
      A: "Persist the complete conversation and tool response history to a database, then call escalate_to_human with a reference ID",
      B: "Compile a structured handoff with customer details, order info, and the identified issue before calling escalate_to_human",
      C: "Attempt the refund with process_refund anyway, escalating only if the system rejects the transaction",
      D: "Call escalate_to_human passing only the customer's original message."
    },
    answer: ["B"],
    explanation: "A structured handoff preserves context gathered during investigation so a human agent can continue without repeating work."
  },
  {
    num: 17,
    kind: "single",
    q: "Your agent has called lookup_order multiple times while investigating a customer's return requests. Each response includes 40+ fields (items, shipping details, payment info, status history). Tool outputs now represent the majority of the conversation's context. The customer mentions two more orders they want to discuss. What's the effective approach before making additional lookups?",
    options: {
      A: "Extract only return-relevant fields (items, purchase date, return window, status) from each existing order response, removing verbose details",
      B: "Proceed with additional lookups without modifying the existing tool output context",
      C: "Move all tool responses to a vector database with semantic indexing, retrieving relevant portions as the conversation continues",
      D: "Have the model generate a natural language summary of each order's key details, replacing structured responses with prose descriptions"
    },
    answer: ["A"],
    explanation: "Compressing tool outputs to retain only task-relevant fields conserves context space for future steps."
  },
  {
    num: 18,
    kind: "single",
    q: "Production logs show that when the agent handles complex billing disputes requiring 6+ tool calls, it sometimes exhausts its max turns limit after gathering data and before completing resolution or escalating. The team's goal is to guarantee that every customer interaction ends with either a completed resolution or a human escalation, regardless of how the agent loop terminates. Which approach achieves this guarantee?",
    options: {
      A: "Add orchestration-layer code that checks the agent's outcome after each loop termination—if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results.",
      B: "Implement a pre-tool-use hook that counts tool invocations and terminates the loop with an automatic escalation once the agent reaches 80% of its remaining actions",
      C: "Add system prompt instructions telling the agent to call escalate_to_human with a summary of its findings whenever it determines it cannot resolve the dispute.",
      D: "Split the workflow into two sequential agent invocations—a first agent gathers information via get_customer and lookup_order, then the second agent uses that data and handles process_refund or escalate_to_human, each with separate turn budgets"
    },
    answer: ["A"],
    explanation: "Enforcing checks outside the agent loop acts as a reliable fallback ensuring no case is left unresolved when limits are hit."
  },
  {
    num: 19,
    kind: "single",
    q: "The document analysis agent has a single analyze_document tool that takes a document and a free-text instruction parameter. During evaluation, requests like \"key financial metrics\" often return narrative summaries, while \"summarize the methodology\" sometimes returns raw data tables. The synthesis agent reports analysis results require re-requests with clarified instructions. What's the most effective way to improve reliability?",
    options: {
      A: "Enhance the tool description with detailed examples showing how different instruction phrasings should map to different output formats",
      B: "Keep the single tool but add an analysis type enum parameter requiring explicit selection between extraction, summarization, and verification",
      C: "Have the coordinator pre-classify each analysis request before passing instructions to the document analysis agent",
      D: "Split the generic tool into purpose-specific tools—extract data points, summarize content, verify claim against source—each with clearly defined inputs and outputs."
    },
    answer: ["D"],
    explanation: "Giving each tool a clear responsibility and expected output format removes free-text instruction ambiguity."
  },
  {
    num: 20,
    kind: "single",
    q: "In production, you observe that simple fact-checking queries traverse all four subagents sequentially, consuming 40+ seconds and significant tokens per query. Complex comparative research benefits from the full pipeline. Your query distribution is diverse and evolving as users discover new applications. What's the most effective approach to optimize for varying query complexity?",
    options: {
      A: "Have the coordinator analyze each query and dynamically decide which subagents to invoke based on its assessment of query requirements.",
      B: "Train a query complexity classifier on labeled historical data to predict optimal subagent combinations, retraining periodically as query patterns evolve.",
      C: "Create a fast-path for factual questions that bypasses subagents entirely, routing all other queries through the complete pipeline to ensure research thoroughness",
      D: "Implement pattern-based routing that categorizes queries by structure (single-fact vs. comparative vs. analytical) and maps each category to a predefined combination."
    },
    answer: ["B"],
    explanation: "A trained classifier provides fast, consistent routing decisions without adding runtime LLM overhead or rigid rule maintenance."
  },
  {
    num: 21,
    kind: "single",
    q: "Your multi-agent research pipeline crashed after processing 12 of 28 documents. The web search agent had identified relevant sources, the document analyzer had partially completed extraction, and the synthesizer had begun pattern identification. You need to resume processing without repeating work or losing fidelity of prior findings. What state management approach best balances information fidelity with context efficiency when restoring agent state?",
    options: {
      A: "Index all agent outputs in a shared vector store. When resuming, each agent queries the store using semantic search to retrieve relevant prior findings.",
      B: "Have each agent maintain its own persistent state file and reload it independently at the start of each session",
      C: "Have each agent persist a structured export to a known location. On resume, the coordinator loads the manifest and injects relevant state into agent prompts",
      D: "Persist the coordinator's conversation log containing all task delegations and responses, providing this to agents when resuming"
    },
    answer: ["C"],
    explanation: "Structured exports preserve deterministic intermediate states for precise workflow reconstruction without heavy raw log bloat."
  },
  {
    num: 22,
    kind: "single",
    q: "Your agent has analyzed a complex service module—reading 23 source files, tracing request flows, and identifying error handling patterns. A developer needs to develop two testing strategies before committing to one: end-to-end tests with mocked external services vs. snapshot tests capturing expected outputs. The developer needs to independently develop both approaches to evaluate trade-offs. How should you manage the sessions?",
    options: {
      A: "Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy.",
      B: "Export the analysis session's key findings to a file, then create two new sessions that reference this file.",
      C: "Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially.",
      D: "Start two fresh sessions, having each re-read the relevant source files before beginning."
    },
    answer: ["A"],
    explanation: "Forking reuses the established analysis context in-memory and allows parallel exploration under identical starting conditions."
  },
  {
    num: 23,
    kind: "single",
    q: "Production monitoring shows the research phase takes longer than expected. Analysis reveals the coordinator invokes the web search subagent, then invokes the document analysis subagent and waits again. These tasks are independent—neither requires the other's output. What is the most effective way to run these subagents concurrently?",
    options: {
      A: "Switch both subagents to use a Haiku-tier model instead of Sonnet to reduce their individual execution time.",
      B: "Create an async orchestration layer outside the agent that spawns parallel threads, each running a separate coordinator",
      C: "Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message",
      D: "Add detailed instructions to the coordinator's system prompt explaining the performance benefits of parallel execution at the same time"
    },
    answer: ["C"],
    explanation: "Emitting multiple independent tool calls in a single response allows the runtime to execute them in parallel."
  },
  {
    num: 24,
    kind: "single",
    q: "An engineer used the agent yesterday to analyze a legacy authentication module, identifying two distinct refactoring approaches: extracting a microservice versus refactoring in-place. Today, they want to explore both approaches in depth—having the agent propose specific code changes for each—before deciding which to implement. What's the most effective way to structure this exploration?",
    options: {
      A: "Use fork session to create two branches from yesterday's analysis, exploring one approach in each fork",
      B: "Resume yesterday's session and explore both approaches sequentially within the same conversation thread.",
      C: "Resume yesterday's session to explore the first approach, then start a new session for the second, manually recreating the original context.",
      D: "Start two fresh sessions, manually providing a summary of yesterday's analysis findings to establish context"
    },
    answer: ["B"],
    explanation: "Continuing the original conversation preserves shared context and allows direct sequential comparison under the same baseline."
  },
  {
    num: 25,
    kind: "single",
    q: "An engineer asks your agent to add comprehensive tests to a legacy codebase with 200 files and minimal existing test coverage. The engineer hasn't spent much time on the codebase, so they ask for help identifying which modules to prioritize. How should the agent decompose this open-ended task?",
    options: {
      A: "Use Glob and Grep to map codebase structure, identify heavily-coupled modules, create a prioritized plan for high-impact areas, and revise as dependencies are discovered.",
      B: "Create a fixed testing schedule upfront based on directory structure, allocating equal effort to each top-level directory regardless of code complexity or importance.",
      C: "Systematically read all 200 files to create a complete function inventory before writing any tests, ensuring the testing plan accounts for everything from the beginning",
      D: "Start writing tests for the first module alphabetically, using test failures and imports to discover related files organically."
    },
    answer: ["A"],
    explanation: "Mapping structure and building a prioritized plan focuses effort on high-impact areas systematically rather than relying on arbitrary ordering."
  },
  {
    num: 26,
    kind: "single",
    q: "Your automated review calls the Claude API for each PR, using tool use with a report_findings tool that returns a JSON array of finding objects (each with file path, line number, severity, category, and description). During testing on a large PR touching 30+ files, the response hits the max tokens limit and the output is truncated mid-JSON, causing your pipeline's parser to fail. What is the most effective way to handle this?",
    options: {
      A: "Increase max tokens to the model's maximum and instruct Claude to keep finding descriptions under 50 words each",
      B: "Switch from tool use to prompting Claude to return findings as a markdown list.",
      C: "Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays.",
      D: "Add retry logic that detects truncated JSON and re-sends the request with instructions to report only critical and high severity findings."
    },
    answer: ["C"],
    explanation: "Batching files keeps responses within token limits, preventing truncation and ensuring valid output."
  },
  {
    num: 27,
    kind: "single",
    q: "You are setting up a non-interactive automated code review pipeline using Claude Code. You want Claude to analyze a pulled Git diff (git diff) against the main branch and apply a custom set of code review instructions. However, you notice that when you run the pipeline, Claude only looks at the raw diff text itself and completely stops using its file-reading or code navigation tools. As a result, it fails to inspect the broader codebase repository context, which is critical because the diff modifies a core function called by many other external modules. Which change to the CLI invocation will cause Claude to read related files in the repository while still successfully applying your custom review instructions?",
    options: {
      A: "Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code's default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools",
      B: "Keep --system-prompt and add --allowedTools \"Read, Glob, Grep\" so that the non-interactive mode permits file system tools that it otherwise disables.",
      C: "Stop piping the diff via stdin and instead embed the diff contents inside the prompt string, so Claude Code treats the invocation as an agentic session rather than a stream-processing one.",
      D: "Remove --system-prompt entirely and place the review instructions in a CLAUDE.md file at the repo root, since --system-prompt is incompatible with tool use under pipe."
    },
    answer: ["A"],
    explanation: "--system-prompt overwrites default tool-guidance instructions, whereas --append-system-prompt preserves them while adding custom rules."
  },
  {
    num: 28,
    kind: "single",
    q: "Your development team is using Claude Code to automate test generation across a large codebase. However, developers are frequently rejecting the generated test suites because Claude creates a high volume of trivial assertions or tests that merely maximize line coverage without validating meaningful behavioral logic or edge cases. You want to guide Claude to generate high-quality, production-ready tests directly without introducing high latency or modifying the core pipeline script. Which strategy best ensures that high-quality, meaningful tests are generated in the first place?",
    options: {
      A: "Restrict test generation to directories where historical quality metrics show higher acceptance rates, disabling it for areas where generated tests consistently require heavy editing",
      B: "Add post-generation coverage analysis that automatically filters out any generated test that doesn't increase line coverage beyond what existing tests provide",
      C: "Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions.",
      D: "Implement a two-phase generation where a second Claude call scores each test against quality criteria, filtering out low-scoring tests before presenting results to developers"
    },
    answer: ["C"],
    explanation: "Persistent guidance in CLAUDE.md shapes test generation from the start to focus on edge cases and logic validation."
  },
  {
    num: 29,
    kind: "single",
    q: "A developer uses Claude Code to refactor a function during their development session. Before committing, they ask the same Claude session to review the code for issues. Later, a separate automated CI review catches several bugs that the same-session review missed. What best explains this discrepancy?",
    options: {
      A: "The CI environment has access to the full codebase context while the local session only sees the current file",
      B: "The CI review uses a more specific prompt tailored for catching bugs, while the developer's request was too general",
      C: "Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions",
      D: "The extended session length caused the context window to fill with conversation history, leaving less room for thorough analysis"
    },
    answer: ["C"],
    explanation: "Retaining earlier assumptions creates confirmation bias, reducing critical evaluation of its own implementation choices."
  },
  {
    num: 30,
    kind: "single",
    q: "Your automated reviewer uses a single prompt covering security issues, API design, and business logic correctness. Your evaluation suite shows strong recall for API design findings (82%) but poor recall for business logic edge cases in quiz scoring (34%). When you add few-shot examples of logic bugs to the prompt, logic recall improves to 41% but API design recall drops to 68%. How should you address this trade-off to improve detection across both categories?",
    options: {
      A: "Split the review into separate focused prompts—one for security and API design, another for business logic—each with dedicated examples, then consolidate findings before posting.",
      B: "Replace the few-shot examples with a detailed checklist of specific logic edge cases to verify, such as division-by-zero in score calculations and boundary conditions in grading thresholds.",
      C: "Upgrade to a more capable model tier, since its stronger reasoning will handle both concern types in a single prompt and eliminate the recall trade-off."
    },
    answer: ["A"],
    explanation: "Focused prompts prevent objective competition and context crowding, preserving high recall across multiple criteria."
  },
  {
    num: 31,
    kind: "single",
    q: "Your codebase exploration tool stores session IDs to allow engineers to continue investigations across work sessions. An engineer spent an hour yesterday analyzing a legacy authentication module, building context about its architecture and dependencies. They want to continue today. The session ID is valid, but version control shows 3 of the 12 files the agent previously read were modified overnight by a teammate's merge. What approach best balances efficiency and accuracy?",
    options: {
      A: "Resume the session and immediately have the agent re-read all 12 previously analyzed files to ensure complete alignment.",
      B: "Resume the session without informing the agent about the changed files, allowing it to naturally detect discrepancies during execution",
      C: "Resume the session and inform the agent which specific files changed for targeted re-analysis while retaining context on the unchanged files.",
      D: "Start a fresh session to ensure the agent works with current codebase state without stale assumptions from the previous day"
    },
    answer: ["C"],
    explanation: "Preserves valuable prior context while avoiding stale assumptions by re-analyzing only the modified files."
  },
  {
    num: 32,
    kind: "single",
    q: "An engineer sees an unfamiliar error message \"SYNC_CONFLICT: entity version mismatch detected\" in production logs but doesn't know which of the 12 services in the codebase generates it. They ask the agent to help locate the source code. What exploration approach will most efficiently find the responsible code?",
    options: {
      A: "Use Grep to search for distinctive text from the error message (like \"SYNC_CONFLICT\" or \"entity version mismatch\"), then Read the matching files to understand context.",
      B: "Use Glob to find files in directories commonly associated with error handling (such as errors/, exceptions/, or handlers/) across services, then Read each matching file.",
      C: "Use Grep to find all files that import the project's error handling module, then Read those files to locate custom error definitions.",
      D: "Read the project's README and service configuration files to understand the architecture, then systematically Read source files in service directory."
    },
    answer: ["A"],
    explanation: "Searching unique error strings with Grep directly and quickly identifies the matching source file."
  },
  {
    num: 33,
    kind: "single",
    q: "You've configured your Claude agent with three MCP servers: one for git operations, one for Jira ticket management, and one for documentation search. When a user asks the agent to \"create a branch for JIRA-123 and add documentation links to the ticket,\" how does the agent access tools across these servers?",
    options: {
      A: "The agent queries each server sequentially to determine which handles each tool, routing calls based on tool name prefixes",
      B: "Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent.",
      C: "You must specify which MCP server to use for each turn, and the agent can only access one server's tools at a time.",
      D: "The agent automatically selects the most relevant server based on the request and loads only that server's tools."
    },
    answer: ["B"],
    explanation: "Connected server tools are loaded during initialization and can be used across servers in a single request."
  },
  {
    num: 34,
    kind: "single",
    q: "Compliance requires that refunds exceeding $500 must automatically escalate to a human agent—this rule cannot be left to model discretion. Despite clear system prompt instructions, production logs show the agent occasionally processes high-value refunds directly (3% failure rate). How should you achieve guaranteed compliance?",
    options: {
      A: "Modify the refund tool to return an error with message \"Amount exceeds policy limit please escalate\" when threshold is exceeded.",
      B: "Implement a hook to intercept tool calls when the refund process amount exceeds $500, block it and invoke human escalation",
      C: "Strengthen the system prompt with emphatic language: \"CRITICAL POLICY! Refunds over $500 MUST trigger human escalation. NEVER process these directly!\"",
      D: "Add few-shot examples to the prompt showing correct escalation behavior at various refund amounts ($40, $500, $600)"
    },
    answer: ["B"],
    explanation: "Deterministic enforcement via a programmatic hook guarantees that prohibited actions cannot bypass limits."
  },
  {
    num: 35,
    kind: "single",
    q: "Production logs reveal inconsistent error handling: when tool_code fails, the agent sometimes retries 5 times, sometimes escalates immediately, and sometimes adds user-friendly explanation. Investigation shows MCP tool returns uniform error responses: `{\"status\": \"error\", \"content\": {\"type\": \"Error\", \"message\": \"Operation failed.\"}}`. What's the most effective improvement?",
    options: {
      A: "Implement retry logic with exponential backoff in your MCP server for all errors, returning to the agent only after retries are exhausted.",
      B: "Create an analyze_error MCP tool the agent calls after any failure to determine the error category and recommended action.",
      C: "Add a few-shot examples to the system prompt demonstrating how to interpret error message patterns and select appropriate responses for each.",
      D: "Enhance error responses with structured metadata. Include error category (transient/retriable/permission), reason, and a description of what caused the failure."
    },
    answer: ["D"],
    explanation: "Structured metadata provides the agent explicit signals to determine whether to retry, escalate, or inform the user."
  },
  {
    num: 36,
    kind: "single",
    q: "Production logs reveal inconsistent error handling when looking up facts. Investigation shows your MCP tool returns uniform error responses (`isError: true, content: [{type: 'text', text: 'Operation failed.'}]`). The agent cannot distinguish between error types. What's the most effective improvement?",
    options: {
      A: "Implement retry logic with exponential backoff in your MCP service for all errors returning to the agent only after retries are exhausted.",
      B: "Create an analyze_error MCP tool that the agent calls after any failure to determine the error category and recommended action.",
      C: "Add few-shot examples to the system prompt demonstrating how to interpret error message context and select appropriate responses for each.",
      D: "Return structured error metadata in MCP responses"
    },
    answer: ["D"],
    explanation: "Structured metadata enables the agent to properly distinguish between transient, retriable, and permission errors."
  },
  {
    num: 37,
    kind: "single",
    q: "After expanding the agent's MCP tools with delivery-specific capabilities, the total tool count has grown from 1 to 7. We have observed that the agent now shows tool selection accuracy has dropped from 86% to 71%. Log analysis reveals the majority of errors involve the agent selecting between semantically overlapping tools—calling issue_credit when process_refund was correct, and calling check_delivery_status when lookup_order already returns the needed data. Which approach structurally eliminates the semantic overlap identified in the error source?",
    options: {
      A: "Consolidate semantically overlapping tools—merge issue_credit and process_refund into a single handle_promotions tool with an action parameter and fold check_delivery_status into lookup_order with an optional include_tracking flag.",
      B: "Enable the tool search tool with defer loading on the six new tools, keeping the original two always loaded, so the agent dynamically discovers specialized tools only when needed.",
      C: "Add few-shot examples to the system prompt demonstrating correct selection for each ambiguous tool, such as showing when issue_credit applies versus when process_refund is appropriate",
      D: "Split the tools across two sub-agents—a 'financial resolution' agent with issue_credit, process_refund, return_order, and apply_promo_code and a 'delivery operations' agent with the remaining delivery tools—with a coordinator routing between them."
    },
    answer: ["A"],
    explanation: "Consolidating overlapping functions into unified interfaces removes ambiguity and improves accuracy."
  },
  {
    num: 38,
    kind: "single",
    q: "You're implementing the escalation logic for when the agent should call a human. Your team processes four different approaches for triggering escalation. Which approach will most reliably identify cases that genuinely require human intervention?",
    options: {
      A: "Instruct the agent to escalate when the customer requests a human, when the issue requires policy exceptions, or when the agent cannot make meaningful progress.",
      B: "Configure the agent to escalate after three consecutive tools fails to resolve the customer's stated issue, ensuring a reasonable attempt before involving a human",
      C: "Build a rules engine that maps specific issue types, customer segments and product categories to escalation decisions, removing the need for model judgment calls.",
      D: "Implement sentiment analysis that monitors for frustration indicators and trigger escalation when the frustration score exceeds a configured threshold."
    },
    answer: ["A"],
    explanation: "Directly covers situations requiring discretionary decisions, preference, or stalled progress."
  },
  {
    num: 39,
    kind: "single",
    q: "Your code-review prompts include both implementation changes and the corresponding test file, but the review comments fail to identify untested code paths. The model correctly flags functions that have no tests at all, but it fails to recognize when conditional branches or error-handling paths within tested functions lack coverage. What is the most effective way to improve branch-level gap detection without overcomplicating the pipeline?",
    options: {
      A: "Interleave the implementation and tests in the prompt, presenting each function immediately before its test cases.",
      B: "Add explicit instructions requiring Claude to enumerate every conditional branch and exception path, then verify that each path has a corresponding test assertion.",
      C: "Implement a two-pass pipeline in which one model call extracts all conditional branches and another cross-references them against test assertions.",
      D: "Include few-shot examples showing code with an uncovered branch and the corresponding review comment identifying the missing test case"
    },
    answer: ["B"],
    explanation: "Explicit branch-checking instructions reliably guide the model to verify test assertions for every path."
  },
  {
    num: 40,
    kind: "single",
    q: "You are integrating Claude Code into your Continuous Integration/Continuous Deployment (CI/CD) pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback, and minimize false positives. Your automated review jobs take 18 seconds to initialize before Claude begins analyzing code. Profiling reveals that the delay results from automatically discovering hooks, MCP servers, plugins, skills, and multiple nested CLAUDE.md files throughout the monorepo. You need to reduce startup time while ensuring reviews still enforce the coding standards documented in the root-level CLAUDE.md file. What is the most effective approach?",
    options: {
      A: "Replace the default prompt using `--system-prompt-file /CLAUDE.md`, which bypasses default prompt assembly and loads only the project rules.",
      B: "Run in bare mode and pass `--append-system-prompt-file /CLAUDE.md` to load the required project standards explicitly while skipping automatic discovery.",
      C: "Run in bare mode and repeat all review criteria directly in the -p prompt for every invocation",
      D: "Keep the default initialization and add exclude-dynamic-system-prompt-sections to improve prompt-cache reuse across CI runners"
    },
    answer: ["B"],
    explanation: "Bare mode bypasses expensive automatic discovery overhead while explicitly appending necessary project standards."
  },
  {
    num: 41,
    kind: "single",
    q: "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, understand legacy systems, generate boilerplate code, and automate repetitive tasks. It uses the built-in tools (Read, Write, Bash, Grep, Glob) and integrates with Model Context Protocol (MCP) servers. An engineer submits two requests: Request A. \"Rename the getUserData function to fetchUserProfile everywhere it's used.\" Request B. \"Improve error handling throughout the data processing module—add try/catch blocks, meaningful error messages, and ensure failures don't silently corrupt data.\" For which request does specifying an explicit multi-phase workflow (such as analyze, propose, review, implement) most improve outcome quality?",
    options: {
      A: "Neither request benefits significantly",
      B: "Request A, the function rename task",
      C: "Both requests benefit equally",
      D: "Request B, the error handling task"
    },
    answer: ["D"],
    explanation: "Complex, judgment-heavy refactoring tasks benefit substantially from structured multi-phase planning compared to mechanical renames."
  },
  {
    num: 42,
    kind: "single",
    q: "You are integrating Claude Code into your Continuous Integration/Continuous Deployment (CI/CD) pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives. A developer uses Claude Code to refactor a function during a development session. Before committing, the developer asks the same Claude session to review the code for issues. Later, a separate automated CI review catches several bugs that the same-session review missed. What best explains this discrepancy?",
    options: {
      A: "Claude retains the implementation context and prior decisions in the session, making it less likely to challenge assumptions underlying its own changes",
      B: "The session's context window necessarily became full, leaving insufficient capacity for meaningful review.",
      C: "The CI review must have used a more specific prompt, while the developer's review request was too general.",
      D: "The CI environment can access the full repository, while a local Claude Code session can access only the current file."
    },
    answer: ["A"],
    explanation: "Carrying forward earlier choices reduces critical questioning of those decisions, making the review less independent."
  },
  {
    num: 43,
    kind: "single",
    q: "You are integrating Claude Code into your Continuous Integration/Continuous Deployment (CI/CD) pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives. Your pipeline includes a release-notes generation step that classifies and summarizes approximately 200 commits at the end of each weekly release cycle. Each commit is currently sent as a separate Messages API request using a Sonnet-tier Claude model. The release notes are not needed until the following morning, providing approximately 12 hours of acceptable latency. Your team must reduce the per-token API cost while retaining the same model, prompts, and output quality. Which approach satisfies all these constraints?",
    options: {
      A: "Issue the 200 Messages API requests concurrently because parallel execution reduces the per-token price",
      B: "Submit the 200 requests through the Message Batches API with unique custom_id values and retrieve the results after the batch finishes.",
      C: "Concatenate all 200 commit messages into one Messages API request because reducing the number of requests always reduces token costs.",
      D: "Replace the Sonnet-tier model with a Haiku-tier model to obtain a lower per-token price"
    },
    answer: ["B"],
    explanation: "The Message Batches API applies a 50% discount for asynchronous, high-volume workloads where latency is flexible."
  },
  {
    num: 44,
    kind: "single",
    q: "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy. It must handle edge cases gracefully and integrate with downstream systems. Your extraction system processes two document types: standard monthly reports, which are archived after processing, and urgent exception reports, which must trigger business alerts within 30 minutes of receipt. Both use the same JSON schema. You want to minimize API costs while meeting the latency requirements. How should you architect the processing pipeline?",
    options: {
      A: "Submit all documents to the Message Batches API with custom id values for tracking. When results arrive, immediately process urgent documents and trigger delayed alerts for exceptions.",
      B: "Route standard reports to the Message Batches API for 50% cost savings, and route urgent exception reports to the real-time Messages API",
      C: "Queue all documents and submit hourly batches, flagging urgent documents for expedited handling when batch results return.",
      D: "Submit all documents to the real-time Messages API to ensure consistent processing latency across document types."
    },
    answer: ["B"],
    explanation: "Balances cost reduction for non-urgent tasks with low latency requirements for exception reports."
  },
  {
    num: 45,
    kind: "single",
    q: "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JavaScript Object Notation (JSON) schemas, and maintains high accuracy. It must handle edge cases gracefully and integrate with downstream systems. Testing reveals that when source documents are missing certain specifications, the model fabricates plausible-sounding values to satisfy your schema's required fields. For example, a document mentioning only dimensions receives a fabricated \"weight: 2.3 kg\" in the extraction output. What schema design change most effectively addresses this hallucination behavior?",
    options: {
      A: "Add explicit instructions to the prompt stating \"only extract information explicitly stated in the document, use placeholder text for missing values.\"",
      B: "Change fields that may not exist in source documents from required to optional, allowing the model to omit them.",
      C: "Add a \"confidence\" field alongside each specification where the model self-reports its certainty, then filter out low-confidence extractions.",
      D: "Implement semantic validation that verifies each extracted value appears in or can be inferred from the source document text"
    },
    answer: ["B"],
    explanation: "Making fields optional removes structural schema pressure, allowing the model to cleanly omit missing data rather than hallucinating."
  },
  {
    num: 46,
    kind: "single",
    q: "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy. It must handle edge cases gracefully and integrate with downstream systems. Your extraction pipeline occasionally receives responses that cannot be parsed as valid JSON, causing downstream processing failures. The current implementation prompts Claude to return JSON in the response text and then parses it. What is the most reliable approach to ensure Claude returns valid, schema-compliant structured data?",
    options: {
      A: "Add explicit formatting instructions to the prompt with JSON examples, emphasizing that Claude must return only valid JSON with no surrounding text.",
      B: "Use regular expressions to locate and extract JSON from the response text, handling cases where Claude includes explanatory text around the JSON block",
      C: "Define a tool with a JSON schema specifying the expected structure, using tool use to constrain Claude's output to schema-compliant JSON.",
      D: "Implement a retry loop that catches JSON parsing errors and re-prompts Claude with the error details, asking it to correct the malformed output."
    },
    answer: ["C"],
    explanation: "Tool use with a schema structurally constrains output, ensuring reliable compliance without manual parsing or regex."
  },
  {
    num: 47,
    kind: "single",
    q: "You are building developer-productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, understand legacy systems, generate boilerplate code, and automate repetitive tasks. It uses the built-in tools—Read, Write, Bash, Grep, and Glob—and integrates with Model Context Protocol (MCP) servers. Your productivity agent connects to three MCP servers: an issue tracker with search_issues, get_issue, and create_comment; a documentation wiki with search_docs, get_page, and list_spaces; and a database explorer with run_query, get_schema, and list_databases. For cross-system questions such as, \"Which database tables are affected by the authentication refactor in PROJ-1234?\", the agent makes eight to ten sequential exploratory calls, lacks visibility into each server's available content, and exhausts context before completing complex investigations. What architectural change best leverages MCP capabilities to address these problems?",
    options: {
      A: "Add a prepare_investigation tool to each server that accepts a natural-language question and returns relevant summaries.",
      B: "Consolidate all three systems into one unified MCP server with cross-referencing capabilities.",
      C: "Expose each server's content catalog as MCP resources, including issue summaries, documentation hierarchies, and database schemas.",
      D: "Add an orchestrator that routes each question to one server based on keywords"
    },
    answer: ["C"],
    explanation: "Exposing catalogs as resources allows efficient browsing and indexing without excessive exploratory round-trips."
  },
  {
    num: 48,
    kind: "single",
    q: "The coordinator provides detailed step-by-step instructions to the web-search subagent, specifying exact search queries, source priorities, and date filters. Production monitoring reveals three issues: (1) the subagent reports \"Insufficient results\" instead of trying alternative approaches when the specified searches fail, (2) research quality drops for emerging topics that do not match expected patterns, and (3) the subagent rarely surfaces valuable tangential sources. What is the most effective way to improve subagent adaptability?",
    options: {
      A: "Specify research objectives and quality criteria—such as coverage breadth, source diversity, and recency—rather than prescribing procedural steps, allowing the subagent to determine its search strategy",
      B: "Remove procedural details entirely and delegate using simple goals such as 'research this topic thoroughly,' relying on the subagent's general capabilities.",
      C: "Add fallback directives requiring alternative query formulations whenever the specified searches produce fewer than a predetermined number of results.",
      D: "Classify each topic as either \"well-defined\" or \"exploratory\" and use a different instruction style for each category."
    },
    answer: ["A"],
    explanation: "Shifting from rigid procedural steps to objective-based delegation enables adaptive exploration and tangential discovery."
  },
  {
    num: 49,
    kind: "single",
    q: "The synthesis agent completes its initial pass but flags that three key research questions remain unanswered because the web-search and document-analysis agents did not find relevant information on those specific subtopics. The coordinator currently proceeds directly to report generation, producing reports with incomplete coverage. What change would most effectively improve research completeness?",
    options: {
      A: "Have the coordinator evaluate the synthesis output for gaps, then redelegate targeted queries to the web-search and document-analysis agents before invoking synthesis again",
      B: "Have the report-generation agent identify unanswered research questions so users understand the limitations of the final output.",
      C: "Increase the initial breadth of queries sent to the web-search and document-analysis agents to reduce the probability of missing relevant information.",
      D: "Give the synthesis agent direct access to web-search tools so it can autonomously fill knowledge gaps without returning control to the coordinator"
    },
    answer: ["A"],
    explanation: "Creates an iterative research loop (synthesize $\rightarrow$ identify gaps $\rightarrow$ follow-up search $\rightarrow$ resynthesize) ensuring completeness."
  },
  {
    num: 50,
    kind: "single",
    q: "In addition to your CI pipeline, your organization has enabled Claude's managed Code Review through the Claude GitHub App on this repository, and reviews run automatically on every pull request. Reviews average 18 findings per pull request. Developer feedback reveals three categories of unwanted noise: (1) style and formatting issues already enforced by your CI linter, (2) findings on automatically generated template code under src/gen/, and (3) rendering-helper patterns that are intentional project conventions but are flagged because they resemble common anti-patterns. Only approximately four findings per pull request are genuine logic bugs. What is the most effective way to reduce this noise while preserving the detection of real issues?",
    options: {
      A: "Create a REVIEW.md file at the repository root containing skip rules for CI-enforced checks and generated files, together with a verification requirement that rendering-related findings cite a specific line demonstrating incorrect behavior.",
      B: "Configure separate GitHub Actions workflow files for each code area: one for generated code with findings suppressed, one for rendering code with custom instructions, and one general workflow for everything else.",
      C: "Add custom review instructions to a GitHub Actions workflow file, using the action's prompt parameter to suppress duplicate sent findings, ignore generated template code, and impose stricter evidence requirements on rendering-related issues",
      D: "Add detailed explanations to the project's CLAUDE.md describing intentional patterns, stating that CI handles linting, and identifying src/gen/ as automatically generated code"
    },
    answer: ["A"],
    explanation: "Dedicated review configuration rules give precise skip instructions and evidence requirements to the managed review system."
  },
  {
    num: 51,
    kind: "single",
    q: "You are using Claude Code to accelerate software development. Your team uses it for code generation, refactoring, debugging, and documentation. You need to integrate it into your development workflow with custom slash commands, CLAUDE.md configurations, and understand when to use plan mode vs direct execution. Your team has connected a custom MCP server that provides DevOps workflow templates. The server exposes several MCP prompts (such as deploy_checklist and incident_response) in addition to tools. How do these MCP prompts become accessible within Claude Code?",
    options: {
      A: "They are automatically prepended to every conversation as additional system-level context, influencing Claude's behavior throughout the session.",
      B: "They are added to Claude Code's tool registry alongside the server's tools, invoked automatically by the model when relevant to the task.",
      C: "They are surfaced as mentionable resources alongside files, fetched and attached to your message when referenced.",
      D: "They appear as slash commands (e.g., /mcp_servername deploy_checklist) that you can invoke, with arguments passed after the command name"
    },
    answer: ["D"],
    explanation: "MCP prompts are surfaced as invocable slash commands within the Claude Code interface."
  },
  {
    num: 52,
    kind: "single",
    q: "Your pipeline includes a release-notes generation step that classifies and summarizes approximately 200 commits at the end of each weekly release cycle. Each commit is currently sent as a separate Messages API call using a Sonnet-tier Claude model. The release notes are not needed until the following morning, so results have approximately 12 hours of acceptable latency. Your team needs to reduce per-token API cost for this step while keeping the same model and prompts, with no change to the model tier or output quality. Which approach satisfies all these constraints?",
    options: {
      A: "Concatenate all 200 commit messages into a single Messages API request and have the model return all summaries in one response, because fewer requests always reduce total token cost.",
      B: "Issue the 200 Messages API requests in parallel using concurrent connections, because concurrency lowers the per-token price charged by the API.",
      C: "Submit the 200 requests to the Message Batches API with unique custom_id values and retrieve the results after the batch finishes, which applies a 50% discount to all input and output tokens.",
      D: "Switch the summarization calls from the Sonnet-tier model to a Haiku-tier model to take advantage of Haiku's lower per-token rates."
    },
    answer: ["C"],
    explanation: "The Batches API provides a 50% discount for asynchronous high-volume jobs while preserving full model quality."
  },
  {
    num: 53,
    kind: "single",
    q: "You are building developer-productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, understand legacy systems, generate boilerplate code, and automate repetitive tasks. It uses the built-in tools—Read, Write, Bash, Grep, and Glob—and integrates with Model Context Protocol (MCP) servers. Engineers frequently ask the agent to cross-reference code changes with Jira tickets during reviews—checking ticket descriptions, acceptance criteria, and recent comments. This currently requires manually copying and pasting content into conversations. The team wants the agent to access this standard Jira ticket data directly. What is the most effective approach?",
    options: {
      A: "Use the Bash tool with curl to call Jira's REST API, including authentication headers and parsing JSON responses inline.",
      B: "Build a custom MCP server wrapping Jira's API with tools designed specifically for this team's code-review workflow.",
      C: "Export Jira tickets to Markdown files in the repository that the agent accesses using the Read tool",
      D: "Integrate an existing Jira MCP server that exposes tickets, comments, and metadata through discoverable tool interfaces."
    },
    answer: ["D"],
    explanation: "Integrating a dedicated MCP server provides standardized, discoverable tool interfaces for Jira data access."
  },
  {
    num: 54,
    kind: "single",
    q: "A user expands the research system beyond its original web-search agent by adding specialized data sources. A financial API agent returns structured JSON containing revenue, margins, and growth rates. A news-monitoring agent returns prose summaries of recent developments. A patent-analysis agent returns structured lists of technology areas. The synthesis agent combines these results into executive briefings. Currently, it converts everything into bullet points, causing financial comparisons to lose tabular clarity and news summaries to lose their narrative flow. What change would most improve briefing quality?",
    options: {
      A: "Standardize all subagent outputs as prose summaries with inline citations.",
      B: "Standardize all subagent outputs as JSON containing fields for claim, evidence, source, and confidence.",
      C: "Update the synthesis agent to render each content type appropriately—financial data as tables, news as prose, and technology areas as structured lists.",
      D: "Add a format-conversion layer that transforms every subagent result into a common intermediate representation before synthesis."
    },
    answer: ["C"],
    explanation: "Making the synthesis layer format-aware preserves the native presentation structure of each distinct data type."
  },
  {
    num: 55,
    kind: "single",
    q: "Users report that final reports sometimes lack depth on specific subtopics. Investigation shows that the document-analysis agent frequently identifies evidence gaps—for example, noting that \"the retrieved sources discuss API authentication but lack details about token-refresh patterns.\" Under the current strict pipeline, this insight is not actionable because searching has already finished. What is the most effective architectural change?",
    options: {
      A: "Add a research-planning agent before the initial search phase to decompose every topic into detailed subquestions.",
      B: "Have the synthesis agent assign confidence scores to each report section and flag insufficiently supported sections for manual review.",
      C: "Require the analysis agent to return specific evidence gaps to the coordinator, which launches targeted searches and invokes analysis again until the defined coverage criteria are satisfied",
      D: "Have the coordinator look for general gap indicators in the analysis output and run additional searches without repeating the analysis stage"
    },
    answer: ["C"],
    explanation: "Dynamic re-searching based on analysis feedback creates an actionable feedback loop to resolve evidence gaps."
  },
  {
    num: 56,
    kind: "single",
    q: "You are building a customer support resolution agent using the Claude Agent SDK. The agent handles high-ambiguity requests like returns, billing disputes, and account issues. It has access to your backend systems through custom Model Context Protocol (MCP) tools (get_customer, lookup_order, process_refund, escalate_to_human). Your target is 80%+ first-contact resolution while knowing when to escalate. Your process_refund tool returns two types of errors: technical errors (\"503 Service Unavailable\", \"Connection timeout\") that are transient (5% of calls), and business errors (\"Order exceeds 30-day return window\", \"Item already refunded\") that are permanent (12% of calls). Monitoring shows the agent wastes 3-4 turns retrying business errors that can never succeed. Currently, both error types return only a plain text message to Claude. What's the most effective way to reduce wasted retries while improving customer-facing response quality?",
    options: {
      A: "Implement automatic retry logic at the tool layer for technical errors only, passing business errors to Claude without retries.",
      B: "Add few-shot examples showing how to distinguish retriable from non-retriable errors by parsing error message text.",
      C: "Add a check_refund_eligibility tool that must be called before process_refund to prevent business rule violations",
      D: "Return structured error responses with retriable: false for business errors and a customer-friendly explanation for Claude to use"
    },
    answer: ["D"],
    explanation: "Structured error responses with actionable flags allow Claude to respond properly without wasting turns on impossible retries."
  },
  {
    num: 57,
    kind: "single",
    q: "You are integrating Claude Code into your Continuous Integration/Continuous Deployment (CI/CD) pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives. During initial testing of the automated review pipeline, you notice that reviews on large pull requests containing more than 50 changed files sometimes take over 20 minutes and cost $8-$12 per run because of extensive agentic loops. Claude reads files, runs analysis tools, and iterates many times. Your team needs each invocation to abort once it reaches both a fixed iteration count and a fixed dollar amount, enforced by Claude Code itself rather than by the surrounding job runner. Which configuration change directly enforces both per-invocation caps?",
    options: {
      A: "Switch the --model flag to a smaller, less expensive model so each iteration uses fewer tokens and has a lower per-call cost.",
      B: "Set timeout-minutes: 5 on the GitHub Actions job step and monitor per-run costs through the Anthropic Console usage dashboard",
      C: "Add --max-turns 10 --max-budget-usd 2.00 to the claude -p invocation to cap iterations and spending.",
      D: "Set --permission-mode dontAsk to automatically deny tool-permission requests not included in the explicitly allowed set."
    },
    answer: ["C"],
    explanation: "Built-in CLI flags (--max-turns and --max-budget-usd) directly enforce per-invocation limits."
  },
  {
    num: 58,
    kind: "single",
    q: "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, understand legacy systems, generate boilerplate code, and automate repetitive tasks. It uses the built-in tools (Read, Write, Bash, Grep, Glob) and integrates with Model Context Protocol (MCP) servers. Your code review assistant needs to analyze pull requests and provide feedback on three aspects: code style compliance, potential security issues, and documentation completeness. Each aspect requires reading files, running analysis tools, and generating a report section. The review process follows the same three-step workflow for every PR. Which task decomposition pattern is most appropriate for this workflow?",
    options: {
      A: "Single comprehensive prompt—include all three instructions in one prompt and let the model handle all three aspects simultaneously.",
      B: "Orchestrator-workers—have a central LLM analyze each PR to dynamically determine which checks are needed, then delegate to specialized worker LLMs for each identified subtask.",
      C: "Prompt chaining—break the review into sequential steps where each aspect (style, security, documentation) is analyzed separately, with outputs combined in a final synthesis step.",
      D: "Routing—classify each PR by type (feature, bugfix, refactor) first, then route to different review prompts optimized for that category."
    },
    answer: ["C"],
    explanation: "When a fixed multi-step workflow occurs every time, prompt chaining structures intermediate results cleanly."
  },
  {
    num: 59,
    kind: "single",
    q: "An AI agent running in Claude Code is investigating a large payment processing module spanning 45 files. After reading the first 8 source files, the agent's responses are becoming noticeably less accurate—it is forgetting previously discussed code patterns and hasn't yet located all test files or traced critical payment flows. What is the most effective approach to complete this investigation without exceeding context limits or causing context degradation?",
    options: {
      A: "Clear context with /clear, then selectively re-read only the most critical files discovered so far, writing key findings to a scratchpad file that persists between context resets.",
      B: "Document all current findings in a summary report, clear context completely, then use that report as the sole reference for continuing the investigation.",
      C: "Spawn subagents (or sub-tasks) to investigate specific questions while the main agent coordinates findings and preserves high-level context.",
      D: "Continue reading the remaining files in the main session, relying on Claude's extended context window to auto-truncate earlier messages as new files are loaded."
    },
    answer: ["C"],
    explanation: "Delegating exploratory subtasks to subagents isolates detailed code inspection while keeping the main coordinator context clean."
  },
  {
    num: 60,
    kind: "single",
    q: "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, understand legacy systems, generate boilerplate code, and automate repetitive tasks using built-in tools (Read, Write, Bash, Grep, Glob) and Model Context Protocol (MCP) servers. Your agent has spent significant context exploring the rendering subsystem—reading shader code, buffer management, and frame synchronization logic. An engineer now asks it to understand how the physics engine integrates with rendering for collision debug overlays. You notice recent responses reference \"typical rendering patterns\" rather than the specific VulkanPipeline and FrameGraph classes it discovered earlier. What's the most effective approach to handle this transition while preserving accuracy?",
    options: {
      A: "Spawn a sub-agent to explore physics independently, then manually synthesize its findings with the rendering knowledge accumulated in the main conversation",
      B: "Use /clear to reset context completely, then start fresh with physics exploration using file paths from the project's CLAUDE.md.",
      C: "Continue in the current context with more targeted prompts referencing the specific classes by name.",
      D: "Summarize key rendering findings (including specific class names and architectural patterns), clear or reset the main context window (or delegate to a sub-agent seeded with that summary), then proceed with the physics integration exploration."
    },
    answer: ["D"],
    explanation: "Summarizing high-value project-specific findings and resetting/seeding context preserves accuracy across subsystem transitions."
  },
  {
    num: 61,
    kind: "single",
    q: "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, understand legacy systems, generate boilerplate code, and automate repetitive tasks using built-in tools (Read, Write, Bash, Grep, Glob) and Model Context Protocol (MCP) servers. Your agent has spent significant context exploring the rendering subsystem—reading shader code, buffer management, and frame synchronization logic. An engineer now asks it to understand how the physics engine integrates with rendering for collision debug overlays. You notice recent responses reference \"typical rendering patterns\" rather than the specific VulkanPipeline and FrameGraph classes it discovered earlier. What's the most effective approach to handle this transition while preserving accuracy?",
    options: {
      A: "Spawn a sub-agent to explore physics independently, then manually synthesize its findings with the rendering knowledge accumulated in the main conversation.",
      B: "Use /clear to reset context completely, then start fresh with physics exploration using file paths from the project's CLAUDE.md.",
      C: "Continue in the current context with more targeted prompts referencing the specific classes by name.",
      D: "Summarize key rendering findings (including specific class names and architectural patterns), clear or reset the main context window (or delegate to a sub-agent seeded with that summary), then proceed with the physics integration exploration."
    },
    answer: ["D"],
    explanation: "Consistent with Q60, seeding a reset context or subagent with a summary preserves vital architectural knowledge."
  },
  {
    num: 62,
    kind: "single",
    q: "An engineer's exploration subagent spent 30 minutes analyzing a legacy payment system, reading 47 files and documenting data flows. The session was interrupted when the engineer's connection dropped. While away, a teammate merged a PR that renamed two utility functions. The engineer wants to continue the same exploration. What is the most effective approach to handle this situation?",
    options: {
      A: "Launch a fresh subagent and include the prior transcript in the initial prompt for context.",
      B: "Resume the subagent from its previous transcript without mentioning the changes—the architecture understanding remains valid.",
      C: "Launch a fresh subagent with a summary of prior findings.",
      D: "Resume the subagent from its previous transcript and inform it about the renamed functions."
    },
    answer: ["D"],
    explanation: "Resuming preserves rich investigation history while updating the agent with relevant code changes."
  },
  {
    num: 63,
    kind: "single",
    q: "Your schema includes a 'skills: string[]' field. Production monitoring reveals three consistency issues: (1) compound phrases like \"Python and SQL\" are sometimes kept as one entry, sometimes split; (2) implied but unstated skills occasionally appear in extractions; (3) similar documents produce wildly different array lengths (5-10 vs 40+ entries). Your prompt currently says \"Extract all skills mentioned.\" What's the most effective improvement?",
    options: {
      A: "Add few-shot examples demonstrating compound phrase handling, explicit mention criteria, and appropriate entry granularity",
      B: "Add constraints: \"Extract 10-20 skills maximum, one skill per entry, only explicitly named skills\"",
      C: "Add post-extraction normalization that maps skills to a canonical taxonomy and deduplicates similar entries.",
      D: "Enrich the schema to skill: string, confidence: float, source_quote: string to capture extraction confidence."
    },
    answer: ["A"],
    explanation: "Few-shot examples teach the model extraction boundaries, granularity, and explicit mention criteria directly."
  },
  {
    num: 64,
    kind: "single",
    q: "During testing, you find that when a customer says \"I need a refund for my recent purchase,\" the agent calls process_refund immediately—but populates the required 'order_id' parameter with a plausible-looking but fabricated value instead of first calling lookup_order to retrieve the actual order ID. The refund call fails because the fabricated ID doesn't exist. Which change directly addresses the root cause of the agent fabricating the order_id value?",
    options: {
      A: "Switch tool choice from \"auto\" to \"any\" to force the agent to make a tool call on every turn.",
      B: "Pre-parse incoming customer messages to extract any order IDs mentioned, and inject them into the conversation context before passing to Claude.",
      C: "Update the 'process_refund' tool description to explicitly state that order_id must be obtained from a prior lookup_order call and must never be assumed or invented",
      D: "Add server-side validation that checks whether the order ID exists in your database before executing or returns an error to the agent if not."
    },
    answer: ["C"],
    explanation: "Explicit tool description constraints instruct the model never to assume or fabricate required identifiers without prior tool lookups."
  },
  {
    num: 65,
    kind: "single",
    q: "A customer returns 4 hours after their initial session about the same billing dispute. The previous 32-turn session contains lookup_order results showing \"Status: PENDING, Expected resolution: 24-48 hours.\" In testing, you observe that when resuming sessions with stale tool results, the agent often references the outdated data in responses (e.g., \"I see your refund is still being processed\") even after subsequent fresh tool calls return different information. What approach most reliably handles returning customers?",
    options: {
      A: "Resume with full history but filter out previous tool_result messages before resuming, keeping only the human/assistant turns so the agent must re-fetch needed data",
      B: "Resume with full history and add a system prompt instruction telling the agent to always prefer the most recent tool results when multiple calls to the same tool exist in context.",
      C: "Start a new session, inject a structured summary of the previous interaction (issue type, actions taken, resolution status), then make fresh tool calls before engaging.",
      D: "Resume with full history and configure the agent to automatically re-call all previously used tools at session start to ensure data freshness."
    },
    answer: ["C"],
    explanation: "Starting fresh with a structured summary avoids stale tool results while ensuring up-to-date data is fetched via fresh calls."
  }
]