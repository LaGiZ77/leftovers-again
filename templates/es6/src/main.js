/**
 * This file simply passes along your bot source and metadata to
 * leftovers-again. No edits necessary.
 */
import LeftoversAgain from 'leftovers-again';
import bot from './bot';
import metadata from '../package.json';

LeftoversAgain.start(metadata, bot);