import React, { useState } from 'react';
import { makeStyles, Typography, CircularProgress, Dialog, DialogContent, Tooltip, TextField, Grid, Card, CardContent } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';
import { useApi } from '@backstage/core-plugin-api';
import { Alert } from '@material-ui/lab';
import { h as highlightsApiRef, G as GITHUB_ANNOTATION_PROJECT_SLUG, a as GITLAB_ANNOTATION_PROJECT_SLUG, E as EHighlightFields, D as DefaultGitInfoFields } from './index-8dc1066e.esm.js';
import useAsync from 'react-use/lib/useAsync';
import { Link, Table, LinkButton, CopyTextButton, Progress } from '@backstage/core-components';
import { DateTime } from 'luxon';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import LaunchIcon from '@material-ui/icons/LaunchOutlined';
import '@backstage/catalog-model';
import 'react-router-dom';
import '@backstage/errors';

const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.palette.text.secondary,
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "bold",
    letterSpacing: 0.5,
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
}));
const GitInfoLabel = ({ label }) => {
  const classes = useStyles();
  return /* @__PURE__ */ React.createElement(Typography, { variant: "body2", className: classes.label }, label);
};

const GitInfoTagTableCommit = ({ tag }) => {
  const { entity } = useEntity();
  const highlightsApi = useApi(highlightsApiRef);
  const { value, loading, error } = useAsync(async () => {
    return highlightsApi.fetchCommit(entity, tag.commitId);
  });
  if (loading) {
    return /* @__PURE__ */ React.createElement(CircularProgress, { size: 16 });
  }
  if (error) {
    return /* @__PURE__ */ React.createElement(Alert, { severity: "error" });
  }
  if (value) {
    return /* @__PURE__ */ React.createElement(Link, { to: value.htmlUrl }, value.message);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
};

const GitInfoTagTable = ({ tags }) => {
  const columns = [
    {
      title: "Tag",
      render: (gitTag) => gitTag.tagUrl ? /* @__PURE__ */ React.createElement(Link, { to: gitTag.tagUrl }, gitTag.name) : /* @__PURE__ */ React.createElement(Typography, { variant: "body2" }, gitTag.name)
    },
    {
      title: "Commit",
      render: (gitTag) => {
        if (gitTag.commitMessage) {
          return /* @__PURE__ */ React.createElement(Link, { to: gitTag.commitUrl }, gitTag.commitMessage);
        }
        return /* @__PURE__ */ React.createElement(GitInfoTagTableCommit, { tag: gitTag });
      }
    }
  ];
  return /* @__PURE__ */ React.createElement(
    Table,
    {
      options: {
        pageSize: 5,
        search: false,
        showTitle: false,
        toolbar: false,
        emptyRowsWhenPaging: false
      },
      data: tags,
      columns
    }
  );
};

const GitInfoTagField = ({ tags }) => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  const dialogContent = () => {
    return /* @__PURE__ */ React.createElement(GitInfoTagTable, { tags });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Link, { color: "primary", to: "", onClick: (event) => {
    event.preventDefault();
    openDialog();
  } }, tags[0].name), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open,
      onClose: closeDialog,
      "aria-labelledby": "dialog-title",
      "aria-describedby": "dialog-description"
    },
    /* @__PURE__ */ React.createElement(DialogContent, null, dialogContent())
  ));
};

const GitInfoBranchesTable = ({ branches }) => {
  const columns = [
    {
      title: "#",
      render: (rowData) => /* @__PURE__ */ React.createElement(Typography, null, rowData.tableData.id + 1)
    },
    {
      title: "Name",
      render: (gitBranch) => /* @__PURE__ */ React.createElement(Typography, null, gitBranch.name)
    }
  ];
  return /* @__PURE__ */ React.createElement(
    Table,
    {
      options: {
        pageSize: 5,
        search: false,
        showTitle: false,
        toolbar: false,
        emptyRowsWhenPaging: false
      },
      data: branches.map((branch) => {
        return {
          name: branch
        };
      }),
      columns
    }
  );
};

const GitInfoBranchesField = ({ branches }) => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  const dialogContent = () => {
    return /* @__PURE__ */ React.createElement(GitInfoBranchesTable, { branches });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Link, { color: "primary", to: "", onClick: (event) => {
    event.preventDefault();
    openDialog();
  } }, branches.length.toString()), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open,
      onClose: closeDialog,
      "aria-labelledby": "dialog-title",
      "aria-describedby": "dialog-description"
    },
    /* @__PURE__ */ React.createElement(DialogContent, null, dialogContent())
  ));
};

TimeAgo.addDefaultLocale(en);
const GitInfoCommitsTable = ({ commits }) => {
  const columns = [
    {
      title: "Committed",
      render: (gitCommit) => {
        const date = DateTime.fromISO(gitCommit.date);
        const timeAgo = new TimeAgo("en-US");
        return /* @__PURE__ */ React.createElement(Tooltip, { title: date.toHTTP() ? date.toHTTP() : "" }, /* @__PURE__ */ React.createElement(Typography, { variant: "body2" }, timeAgo.format(date.toJSDate())));
      }
    },
    {
      title: "Message",
      render: (gitCommit) => gitCommit.htmlUrl ? /* @__PURE__ */ React.createElement(Link, { to: gitCommit.htmlUrl }, gitCommit.message) : /* @__PURE__ */ React.createElement(Typography, { variant: "body2" }, gitCommit.message)
    },
    {
      title: "Author",
      render: (gitCommit) => gitCommit.authorHtmlUrl ? /* @__PURE__ */ React.createElement(Link, { to: gitCommit.authorHtmlUrl }, gitCommit.author) : /* @__PURE__ */ React.createElement(Typography, { variant: "body2" }, gitCommit.author)
    }
  ];
  return /* @__PURE__ */ React.createElement(
    Table,
    {
      style: { width: 800 },
      options: {
        pageSize: 5,
        search: false,
        showTitle: false,
        toolbar: false,
        emptyRowsWhenPaging: false
      },
      data: commits,
      columns
    }
  );
};

const GitInfoCommitsField = ({ commits }) => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  const dialogContent = () => {
    return /* @__PURE__ */ React.createElement(GitInfoCommitsTable, { commits });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Link, { color: "primary", to: "", onClick: (event) => {
    event.preventDefault();
    openDialog();
  } }, /* @__PURE__ */ React.createElement("div", { style: { overflow: "hidden", textOverflow: "ellipsis", width: "12rem" } }, commits[0].message)), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open,
      onClose: closeDialog,
      "aria-labelledby": "dialog-title",
      "aria-describedby": "dialog-description"
    },
    /* @__PURE__ */ React.createElement(DialogContent, null, dialogContent())
  ));
};

TimeAgo.addDefaultLocale(en);
const GitInfoCommitsDateField = ({ commits }) => {
  const date = DateTime.fromISO(commits[0].date.toString());
  const timeAgo = new TimeAgo("en-US");
  return /* @__PURE__ */ React.createElement(Tooltip, { title: date.toHTTP() ? date.toHTTP() : "" }, /* @__PURE__ */ React.createElement(Typography, { variant: "body2" }, timeAgo.format(date.toJSDate())));
};

const GtInfoAuthorField = ({ commits }) => {
  return commits[0].authorHtmlUrl ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Link, { to: commits[0].authorHtmlUrl }, /* @__PURE__ */ React.createElement(React.Fragment, null, commits[0].author, /* @__PURE__ */ React.createElement(LaunchIcon, { style: { fontSize: "16px" } })))) : /* @__PURE__ */ React.createElement(Typography, { variant: "body2" }, commits[0].author);
};

const GitInfoCloneDialog = () => {
  var _a, _b;
  const { entity } = useEntity();
  const githubAnnotation = (_a = entity.metadata.annotations) == null ? void 0 : _a[GITHUB_ANNOTATION_PROJECT_SLUG];
  const gitlabAnnotation = (_b = entity.metadata.annotations) == null ? void 0 : _b[GITLAB_ANNOTATION_PROJECT_SLUG];
  let cloneUrl;
  if (githubAnnotation) {
    cloneUrl = `https://github.com/${githubAnnotation}.git`;
  }
  if (gitlabAnnotation) {
    cloneUrl = `https://gitlab.com/${gitlabAnnotation}.git`;
  }
  if (cloneUrl) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      TextField,
      {
        id: "outlined-read-only-input",
        label: "HTTPS",
        defaultValue: cloneUrl,
        onFocus: (event) => {
          event.target.select();
        },
        style: { width: 400 },
        InputProps: {
          readOnly: true
        }
      }
    ), /* @__PURE__ */ React.createElement(CopyTextButton, { text: cloneUrl, tooltipText: "Copied!" }));
  }
  return /* @__PURE__ */ React.createElement(Alert, { severity: "error" }, "No annotation");
};
const GitInfoCloneField = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  const dialogContent = () => {
    return /* @__PURE__ */ React.createElement(GitInfoCloneDialog, null);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(LinkButton, { size: "small", color: "default", variant: "outlined", to: "", onClick: (event) => {
    event.preventDefault();
    openDialog();
  } }, "Clone"), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      maxWidth: "xl",
      open,
      onClose: closeDialog,
      "aria-labelledby": "dialog-title",
      "aria-describedby": "dialog-description"
    },
    /* @__PURE__ */ React.createElement(DialogContent, null, dialogContent())
  ));
};

const GitInfoCard = ({ fields }) => {
  const { entity } = useEntity();
  const highlightsApi = useApi(highlightsApiRef);
  const { value, loading, error } = useAsync(async () => {
    return highlightsApi.fetchAll(entity);
  });
  if (loading) {
    return /* @__PURE__ */ React.createElement(Grid, { item: true, xs: 12, md: 12 }, /* @__PURE__ */ React.createElement(Progress, null));
  }
  if (error) {
    return /* @__PURE__ */ React.createElement(Alert, { severity: "error" }, JSON.stringify(error));
  }
  if (value && fields.length) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, " ", fields.map((field) => {
      switch (field) {
        case EHighlightFields.latest_tag:
          return /* @__PURE__ */ React.createElement(Grid, { item: true, key: field }, /* @__PURE__ */ React.createElement(GitInfoLabel, { label: "Latest tag" }), /* @__PURE__ */ React.createElement(GitInfoTagField, { tags: value.tags }));
        case EHighlightFields.number_of_branches:
          return /* @__PURE__ */ React.createElement(Grid, { item: true, key: field }, /* @__PURE__ */ React.createElement(GitInfoLabel, { label: "Number of branches" }), /* @__PURE__ */ React.createElement(GitInfoBranchesField, { branches: value.branches }));
        case EHighlightFields.latest_commit:
          return /* @__PURE__ */ React.createElement(Grid, { item: true, key: field }, /* @__PURE__ */ React.createElement(GitInfoLabel, { label: "Latest commit" }), /* @__PURE__ */ React.createElement(GitInfoCommitsField, { commits: value.commits }));
        case EHighlightFields.commit_date:
          return /* @__PURE__ */ React.createElement(Grid, { item: true, key: field }, /* @__PURE__ */ React.createElement(GitInfoLabel, { label: "Committed" }), /* @__PURE__ */ React.createElement(GitInfoCommitsDateField, { commits: value.commits }));
        case EHighlightFields.author:
          return /* @__PURE__ */ React.createElement(Grid, { item: true, key: field }, /* @__PURE__ */ React.createElement(GitInfoLabel, { label: "Author" }), /* @__PURE__ */ React.createElement(GtInfoAuthorField, { commits: value.commits }));
        case EHighlightFields.clone:
          return /* @__PURE__ */ React.createElement(Grid, { item: true, key: field }, /* @__PURE__ */ React.createElement(GitInfoCloneField, null));
        default:
          return /* @__PURE__ */ React.createElement(React.Fragment, null);
      }
    }));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
};

const HighlightsCustomFieldsCards = ({ customFields }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, customFields.map(
    (customField, index) => /* @__PURE__ */ React.createElement(Grid, { item: true, key: index }, customField.fieldLabel && /* @__PURE__ */ React.createElement(GitInfoLabel, { label: customField.fieldLabel }), customField.field)
  ));
};

const HighlightsCard = (props) => {
  const builtInFields = [];
  if (props.fields) {
    builtInFields.push(...props.fields);
  } else {
    builtInFields.push(...DefaultGitInfoFields);
  }
  return /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 3 }, builtInFields.length > 0 && /* @__PURE__ */ React.createElement(GitInfoCard, { fields: builtInFields }), props.customFields !== void 0 && /* @__PURE__ */ React.createElement(HighlightsCustomFieldsCards, { customFields: props.customFields }))));
};

export { HighlightsCard };
//# sourceMappingURL=index-8911d4f9.esm.js.map
