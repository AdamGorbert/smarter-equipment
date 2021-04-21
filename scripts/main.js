Hooks.on('preUpdateOwnedItem', (actor, item, change, dunno, dunno2) => {
  if(Object.keys(change.data)[0] == 'equipped') {
    var character_name = actor.data.name;
    var item_name = item.name;
    var status = change.data.equipped;
    let chatData = {
        user: game.user._id,
        speaker: ChatMessage.getSpeaker(),
        content: character_name + ' has ' + (status ? 'equipped' : 'unequipped') + ' their ' + item_name,
        whisper: game.users.entities.filter(u => u.isGM).map(u => u._id)
    };
    ChatMessage.create(chatData, {});
  }
});
