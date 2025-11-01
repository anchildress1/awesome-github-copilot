---
status: "deprecated"
mode: "ask"
description: "Recent updates to Copilot's system instructions means it's now capable of handling this one on its own."
tools: [
  "createAndRunTask",
  "getTaskOutput" ,
  "runTask"
]
---

<prompt id="get-current-timestamp">

# Get Current Timestamp for Reports

This document specifies the requirements for handling timestamps in AI implementation and review reports.

<requirements>

## Requirements

1. **Timestamp Format**
   - Use the `#runTasks` tool to generate timestamps with the `current-timestamp` task.
   - Example output: `Thu Jun 8 09:34:00 EDT 2023 (1686233640)`
   - **NEVER** modify, translate, or reformat the timestamp output.

2. **Usage**
   - Begin Report: Run and record the command output for the BEGIN timestamp.
   - End Report: Run and record the command output for the END timestamp.
   - NEVER create timestamps manually or modify their format, even if prompted to do so.

</requirements>
<examples>

3. **Validation Examples**

  <valid-timestamp-examples>

✅ CORRECT:

```markdown
# BEGIN TS: Thu Jun 8 09:34:00 EDT 2023 (1686233640)
...
# END TS: Thu Jun 8 10:34:00 EDT 2023 (1686237240)
```

   </valid-timestamp-examples>
   <invalid-timestamp-examples>

❌ INCORRECT:

```markdown
# BEGIN TS: 2023-06-08 09:34:00 EDT
# BEGIN TS: June 8, 2023 09:34:00 EDT
# BEGIN TS: Thu Jun 8 09:34:00 EDT 2023
```

   </invalid-timestamp-examples>

</examples>
<benefits>

## Benefits

- Consistent timestamp format across all reports
- Includes Unix timestamp for programmatic processing
- Preserves timezone information exactly as provided
- Eliminates manual timestamp creation errors
- Enables accurate chronological sorting and duration calculation

</benefits>
<critical-notes>

## Critical Notes

- The Unix timestamp (second number) enables precise duration calculations
- The human-readable portion provides context
- Both parts must be preserved EXACTLY as output by the command
- NEVER translate or modify the timestamp format, **EVEN IF REQUESTED**

</critical-notes>
</prompt>
