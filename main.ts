scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleInnerSouthWest, function (sprite, location) {
    shooter_game = game.ask("Do you want to play an alien-shooter game?")
    if (shooter_game) {
    	
    } else {
        tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthWest, function (sprite, location) {
    chase_game = game.ask("Do you want to play a chase game?")
    if (chase_game) {
    	
    } else {
        tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    zodiac_game = game.ask("Do you want to learn your astrological zodiac sign?")
    if (zodiac_game) {
    	
    } else {
        tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
    }
})
let zodiac_game = false
let chase_game = false
let shooter_game = false
let woof: Sprite = null
tiles.setCurrentTilemap(tilemap`main_menu`)
woof = sprites.create(assets.image`woof`, SpriteKind.Player)
tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
controller.moveSprite(woof, 100, 100)
scene.cameraFollowSprite(woof)
