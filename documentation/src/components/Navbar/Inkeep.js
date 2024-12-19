import { InkeepSearchBar, InkeepChatButton } from "@inkeep/uikit";

const baseSettings = {
  apiKey: process.env.API_KEY, // required
  integrationId: process.env.INTEGRATION_ID, // required
  organizationId: process.env.ORGANIZATION_ID, // required
  organizationDisplayName: "Inkeep",
  primaryBrandColor: "#26D6FF",
};

const searchBarProps = {
  baseSettings: {
    ...baseSettings,
    theme: {
      // stylesheetUrls: ['/path/to/stylesheets'], // optional
    },
  },
  modalSettings: {
    // optional modal settings
  },
  searchSettings: {
    // optional search settings
  },
  aiChatSettings: {
    // optional AI chat settings
    botAvatarSrcUrl: "/img/inkeep-logo.svg", // use your own bot avatar
    botAvatarDarkSrcUrl: "/img/inkeep-logo-dark.svg", // for dark mode
    quickQuestions: [
      "Get Started with LoginRadius",
      "How does the LoginRadius User Registration System work?",
      "Invalid Request URI Error?",
      "Consumer Audit Logs?",
    ],
  },
};

export const InKeepSearchBar = () => {
  return (
    <div className="relative w-full max-w-sm self-center">
      {" "}
      <InkeepSearchBar {...searchBarProps} />
    </div>
  );
};

const InkeepChatButtonProps = {
  chatButtonType: "PILL", // default. Alternatives are 'RECTANGLE_SHORTCUT' and 'ICON'
  baseSettings: {
    ...baseSettings,
  },
  modalSettings: {
    // optional typeof InkeepModalSettings
  },
  searchSettings: {
    // optional typeof InkeepSearchSettings
  },
  aiChatSettings: {
    // optional typeof InkeepAIChatSettings
    botAvatarSrcUrl: "/img/inkeep-logo.svg", // use your own bot avatar
    botAvatarDarkSrcUrl: "/img/inkeep-logo-dark.svg", // for dark mode or more contrast against button bg
    quickQuestions: [
      "Get Started with LoginRadius",
      "How does the LoginRadius User Registration System work?",
      "Invalid Request URI Error?",
      "Consumer Audit Logs?",
    ],
  },
};

export const InKeepChatButton = () => {
  return <InkeepChatButton {...InkeepChatButtonProps} />;
};
