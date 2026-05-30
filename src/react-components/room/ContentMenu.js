import React from "react";
import className from "classnames";
import PropTypes from "prop-types";
import { joinChildren } from "../misc/joinChildren";
import styles from "./ContentMenu.scss";
import { ReactComponent as ObjectsIcon } from "../icons/Objects.svg";
import { ReactComponent as PeopleIcon } from "../icons/People.svg";
import { ReactComponent as CameraIcon } from "../icons/Camera.svg";
import { FormattedMessage } from "react-intl";

export function ContentMenuButton({ active, disabled, children, ...props }) {
  return (
    <button
      className={className(styles.contentMenuButton, { [styles.active]: active, [styles.disabled]: disabled })}
      {...props}
    >
      {children}
    </button>
  );
}

ContentMenuButton.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

export function ECSDebugMenuButton(props) {
  return (
    <ContentMenuButton {...props}>
      <ObjectsIcon />
      <span>
        <FormattedMessage id="content-menu.ecs-debug-menu-button" defaultMessage="ECS Debug" />
      </span>
    </ContentMenuButton>
  );
}

export function ObjectsMenuButton(props) {
  return (
    <ContentMenuButton {...props}>
      <ObjectsIcon />
      <span>
        <FormattedMessage id="content-menu.objects-menu-button" defaultMessage="Objects" />
      </span>
    </ContentMenuButton>
  );
}

export function PeopleMenuButton(props) {
  return (
    <ContentMenuButton {...props}>
      <PeopleIcon />
      <span>
        <FormattedMessage
          id="content-menu.people-menu-button"
          defaultMessage="People ({presenceCount})"
          values={{ presenceCount: props.presencecount }}
        />
      </span>
    </ContentMenuButton>
  );
}
PeopleMenuButton.propTypes = {
  presencecount: PropTypes.number
};


export function CameraModeMenuButton(props) {
  return (
    <ContentMenuButton {...props}>
      <CameraIcon />
      <span>
        <FormattedMessage id="content-menu.camera-mode-menu-button" defaultMessage="視点切替" />
      </span>
    </ContentMenuButton>
  );
}

export function ContentMenu({ children }) {
  return (
    <div className={styles.contentMenu}>
      {joinChildren(children, () => (
        <div className={styles.separator} />
      ))}
    </div>
  );
}

ContentMenu.propTypes = {
  children: PropTypes.node
};
